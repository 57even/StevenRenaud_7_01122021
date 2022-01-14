const db = require("../config/db");

class Comment {
  constructor(postId, author, body) {
    this.postId = postId;
    this.author = author;
    this.body = body;
  }

  save() {
    let date = new Date();

    let sql = `
      INSERT INTO comments(
        postId,
        author,
        body,
        date
      )
      VALUES(
        ${this.postId},
        '${this.author}',
        '${this.body}',
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
