const db = require("../config/db");
const fs = require("fs");

class Post {
  constructor(author, title, text, image) {
    this.author = author;
    this.title = title;
    this.text = text;
    this.image = image;
  }

  save() {
    let date = new Date();

    let sql = `
      INSERT INTO posts(
        author,
        title,
        text,
        image,
        date
      )
      VALUES(
        '${this.author}',
        '${this.title}',
        '${this.text}',
        '${this.image}',
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
    let sql;
    console.log(id);
    if (!Number(id)) {
      sql = `SELECT * FROM posts WHERE title LIKE '%${id}%' OR text LIKE '%${id}%';`;
    } else {
      sql = `SELECT * FROM posts WHERE id = '${id}';`;
    }

    return db.execute(sql);
  }

  static modifyById(id, title, text) {
    let sql = `UPDATE posts SET title = '${title}', text = '${text}' WHERE id = ${id};`;

    return db.execute(sql);
  }

  static modifyLikeCount(id, likeCount, dislikeCount) {
    let sql = `UPDATE posts SET likeCount = likeCount + ${likeCount}, dislikeCount = dislikeCount + ${dislikeCount} WHERE id = ${id};`;

    return db.execute(sql);
  }

  static deleteById(id, commentCount, image) {
    if (commentCount) {
      db.execute(`DROP TABLE comments${id}`);
    }
    if (image) {
      const filename = image.split("/images/")[1];

      if (filename) {
        fs.unlinkSync(`public/images/${filename}`);
      }
    }

    let sql = `DELETE FROM posts WHERE id = ${id};`;

    return db.execute(sql);
  }
}

module.exports = Post;
