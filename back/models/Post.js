const db = require("../config/db");

class Post {
  constructor(author, title, body) {
    this.author = author;
    this.title = title;
    this.body = body;
  }

  save() {
    let date = new Date();

    let sql = `
      INSERT INTO posts(
        author,
        title,
        body,
        date
      )
      VALUES(
        '${this.author}',
        '${this.title}',
        '${this.body}',
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
}

module.exports = Post;
