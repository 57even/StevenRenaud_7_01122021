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

  static modifyOne(userId, firstName, lastName, email, pwd, birthday, gender) {
    let sql = `UPDATE users SET firstName = '${firstName}', lastName = '${lastName}', email = '${email}', pwd = '${pwd}', birthday = '${birthday}', gender = '${gender}' WHERE id = ${userId};`;

    return db.execute(sql);
  }
}

module.exports = User;
