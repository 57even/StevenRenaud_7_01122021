const db = require("../config/db");

class Post {
  constructor(author, title, text) {
    this.author = author;
    this.title = title;
    this.text = text;
  }

  save() {
    let date = new Date();

    let sql = `
      INSERT INTO posts(
        author,
        title,
        text,
        date
      )
      VALUES(
        '${this.author}',
        '${this.title}',
        '${this.text}',
        '${date}'
      )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM posts;";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM posts WHERE id = ${id};`;

    return db.execute(sql);
  }

  static modifyById(id, title, text) {
    let sql = `UPDATE posts SET title = '${title}', text = '${text}' WHERE id = ${id};`;

    return db.execute(sql);
  }

  static deleteById(id) {
    let sql0 = `DELETE FROM comments where postId = ${id}`;
    let sql = `DELETE FROM posts WHERE id = ${id};`;

    db.execute(sql0);
    return db.execute(sql);
  }
}

module.exports = Post;
