const Post = require("../models/post.model");

module.exports = {
  test: (req, res) => {
    res.send("post controller");
  },

  createNew: (req, res) => {
    const newPost = new Post({
      title: req.body.title,
      description: req.body.description,
      description2: req.body.description2,
      imageUrl: req.file.path.replace("\\", "/"),
    });

    Post.CreateNew(newPost, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log("data", data);
        res.status(200).json({ success: true, result: newPost });
      }
    });
  },

  getAll: (req, res) => {
    Post.getAll((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
};
