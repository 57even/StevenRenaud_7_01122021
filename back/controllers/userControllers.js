const {
  default: strictTransportSecurity,
} = require("helmet/dist/middlewares/strict-transport-security");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const fs = require("fs");

exports.authCheck = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "secret_key_109571533518");
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      res.status(200).json({ auth: false });
    } else {
      res.status(200).json({ auth: true });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.modifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "secret_key_109571533518");
    const tokenUserId = decodedToken.userId;
    let userId = req.params.id;

    if (userId != tokenUserId) {
      return res.status(401).json({ error: "User not authorized !" });
    }
    const validEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validPasswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!validEmail.test(req.body.email)) throw "Email non valide";
    if (!validPasswd.test(req.body.pwd))
      return res.status(401).json({
        error:
          "Le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, une minuscule et un chiffre",
      });

    let pwd = await bcrypt.hash(req.body.pwd, 10);
    let newPwd;
    if (req.body.newPwd && req.body.newPwd.length > 5) {
      if (!validPasswd.test(req.body.newPwd)) {
        return res.status(401).json({
          error:
            "Le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, une minuscule et un chiffre",
        });
      }
      newPwd = await bcrypt.hash(req.body.newPwd, 10);
    } else {
      newPwd = pwd;
    }
    let { firstName, lastName, email, birthday, gender } = req.body;
    let [user, _] = await User.findOne(email);

    let avatar;
    if (req.file) {
      avatar = `${req.protocol}://${req.get("host")}/images/avatars/${
        req.file.filename
      }`;
    } else {
      avatar = req.body.avatar;
    }

    if (await bcrypt.compare(req.body.pwd, user[0].pwd)) {
      pwd = newPwd;
      await User.modifyOne(
        userId,
        avatar,
        firstName,
        lastName,
        email,
        pwd,
        birthday,
        gender
      );

      if (req.file) {
        const oldAvatar = user[0].avatar;
        const filename = oldAvatar.split("/avatars/")[1];
        if (filename !== "profile_pic.png") {
          fs.unlinkSync(`public/images/avatars/${filename}`);
        }
      }
    }

    res.status(201).json({ message: "Utilisateur modifié avec succès" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    let userId = req.params.id;
    let [user, _] = await User.findOne(userId);

    res.status(200).json({ user: user[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.signup = async (req, res, next) => {
  try {
    const validEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validPasswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!validEmail.test(req.body.email)) throw "Email non valide";
    if (!validPasswd.test(req.body.pwd))
      return res.status(401).json({
        error:
          "Le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, une minuscule et un chiffre",
      });

    let pwd = await bcrypt.hash(req.body.pwd, 10);
    let { firstName, lastName, email, birthday, gender } = req.body;
    let user = new User(firstName, lastName, email, pwd, birthday, gender);

    post = await user.save();

    res.status(201).json({ message: "Utilisateur créer avec succès" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    let email = req.body.email;
    let [user, _] = await User.findOne(email);
    if (user.length == 0) {
      return res.status(401).json({ error: "Utilisateur introuvable !" });
    }

    if (await bcrypt.compare(req.body.pwd, user[0].pwd)) {
      res.status(200).json({
        userId: user[0].id,
        isAdmin: user[0].admin,
        token: jwt.sign(
          { userId: user[0].id, isAdmin: user[0].admin },
          "secret_key_109571533518",
          {
            expiresIn: "72h",
          }
        ),
      });
    } else {
      return res.status(401).json({ error: "Mot de passe incorrect !" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "secret_key_109571533518");
    const tokenUserId = decodedToken.userId;
    const isAdmin = decodedToken.isAdmin;
    let userId = req.params.id;

    if (userId != tokenUserId && isAdmin != 1) {
      return res.status(401).json({ error: "User not authorized !" });
    }

    let { avatar } = req.body;
    await User.deleteById(userId, avatar);

    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
