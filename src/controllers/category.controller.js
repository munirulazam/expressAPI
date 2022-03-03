const Category = require("../models/category.model");

module.exports = {
  //test method
  test: function (req, res) {
    res.send("from category controller");
  },
  createnew: function (req, res) {
    const newCategory = new Category({
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.file.path.replace("\\", "/"),
    });

    Category.CreateNew(newCategory, function (err, data) {
      if (err) {
        res.status(500).send(err);
      } else {
        // console.dir(data);
        // res.status(200).send(data);

        //upload.single('image'),

        console.log("data", data);
        res.status(200).json({ success: true, result: newCategory });
      }
    });
  },

  getAll: function (req, res) {
    Category.GetAll(function (err, data) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },

  edit: (req, res) => {
    const editCategory = new Category({
      id: req.params.id,
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.file.path.replace("\\", "/"),
    });
    Category.edit(editCategory, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
};
