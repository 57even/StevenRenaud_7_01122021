const db = require("../config/db");

class Comment {
  constructor(postId, author, text) {
    this.postId = postId;
    this.author = author;
    this.text = text;
  }

  save() {
    let date = new Date();

    let sql = `
      INSERT INTO comments${this.postId}(
        author,
        text,
        date
      )
      VALUES(
        '${this.author}',
        '${this.text}',
        '${date}'
      )
    `;

    db.execute(
      `UPDATE posts SET commentCount = commentCount + 1 WHERE id = ${this.postId}`
    );

    return db.execute(sql);
  }

  static createTable(postId) {
    let sql = `CREATE TABLE comments${postId} (
      id int auto_increment,
      postId int,
      author int,
      text varchar(10000),
      date varchar(100),
      PRIMARY KEY (id),
      FOREIGN KEY (postId) REFERENCES posts(id)
    )`;

    return db.execute(sql);
  }

  static findAll(postId) {
    let sql = `SELECT * FROM comments${postId}`;

    return db.execute(sql);
  }

  static modifyById(postId, id, text) {
    let sql = `UPDATE comments${postId} SET text = '${text}' WHERE id = ${id}`;

    return db.execute(sql);
  }

  static deleteById(postId, id) {
    let sql = `DELETE FROM comments${postId} where id = ${id}`;

    db.execute(
      `UPDATE posts SET commentCount = commentCount - 1 WHERE id = ${postId}`
    );

    return db.execute(sql);
  }
}

module.exports = Comment;
