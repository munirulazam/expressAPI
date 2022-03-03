const dbConn = require("../config/db.config");

var Post = function (post) {
  this.id = post.id;
  this.title = post.title;
  this.description = post.description;
  this.description2 = post.description2;
  this.imageURL = post.imageUrl;
};

(Post.CreateNew = (newPost, result) => {
  dbConn.query("INSERT INTO posts SET ?", newPost, (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
}),
  (Post.getAll = (result) => {
    dbConn.query("SELECT * from posts", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  });

module.exports = Post;
