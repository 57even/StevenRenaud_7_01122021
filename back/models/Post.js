const db = require("../config/db");

class Post {
  constructor(author, title, body) {
    this.author = author;
    this.title = title;
    this.body = body;
  }

  save() {
    let d = new Date();
    let dd = d.getDate();
    let mm = d.getMonth() + 1;
    let yyyy = d.getFullYear();

    let createdAtDate = `${dd}-${mm}-${yyyy}`;

    let sql = `
      INSERT INTO posts(
        author,
        title,
        body,
        created_at
      )
      VALUES(
        '${this.author}',
        '${this.title}',
        '${this.body}',
        '${createdAtDate}'
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
