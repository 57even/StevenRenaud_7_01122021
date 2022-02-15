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
      INSERT INTO comments(
        postId,
        author,
        text,
        date
      )
      VALUES(
        ${this.postId},
        '${this.author}',
        '${this.text}',
        '${date}'
      )
    `;

    return db.execute(sql);
  }

  static findAll(postId) {
    let sql = `SELECT * FROM comments WHERE postId = '${postId}';`;

    return db.execute(sql);
  }
}

module.exports = Comment;
