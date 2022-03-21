const db = require("../config/db");

class User {
  constructor(firstName, lastName, email, pwd, birthday, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.pwd = pwd;
    this.birthday = birthday;
    this.gender = gender;
  }

  save() {
    let sql = `
      INSERT INTO users(
        firstName,
        lastName,
        email,
        pwd,
        birthday,
        gender
      )
      VALUES(
        '${this.firstName}',
        '${this.lastName}',
        '${this.email}',
        '${this.pwd}',
        '${this.birthday}',
        '${this.gender}'
      )
    `;

    return db.execute(sql);
  }

  static findOne(param) {
    let sql = `SELECT * FROM users WHERE id = ${param};`;
    if (param.includes("@")) {
      sql = `SELECT * FROM users WHERE email = '${param}';`;
    }

    return db.execute(sql);
  }

  static modifyOne(
    userId,
    avatar,
    firstName,
    lastName,
    email,
    pwd,
    birthday,
    gender
  ) {
    console.log(userId);
    let sql = `UPDATE users SET avatar = '${avatar}', firstName = '${firstName}', lastName = '${lastName}', email = '${email}', pwd = '${pwd}', birthday = '${birthday}', gender = '${gender}' WHERE id = ${userId};`;

    return db.execute(sql);
  }
}

module.exports = User;
