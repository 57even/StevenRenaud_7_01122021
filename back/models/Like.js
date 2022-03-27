const db = require("../config/db");

class Like {
  constructor(postId, userId, likeValue) {
    this.postId = postId;
    this.userId = userId;
    this.likeValue = likeValue;
  }

  save() {
    let sql = `
      INSERT INTO like${this.postId}(
        userId,
        likeValue
      )
      VALUES(
        '${this.userId}',
        '${this.likeValue}'
      )
    `;

    return db.execute(sql);
  }

  static createTable(postId) {
    let sql = `CREATE TABLE like${postId} (
      id int auto_increment,
      userId int,
      likeValue int,
      PRIMARY KEY (id),
      FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
    )`;

    return db.execute(sql);
  }

  static findById(postId, userId) {
    let sql = `SELECT * FROM like${postId} WHERE userId = ${userId}`;

    return db.execute(sql);
  }

  static modifyById(postId, userId, like) {
    let sql = `UPDATE like${postId} SET likeValue = '${like}' WHERE userId = ${userId}`;

    return db.execute(sql);
  }

  static deleteById(postId, userId) {
    let sql = `DELETE FROM like${postId} where userId = ${userId}`;

    return db.execute(sql);
  }
}

module.exports = Like;
