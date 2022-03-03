const dbConn = require("../config/db.config");

var Category = function (category) {
  this.id = category.id;
  this.name = category.name;
  this.description = category.description;
  this.imageUrl = category.imageUrl;
};

(Category.CreateNew = function (newCategory, result) {
  dbConn.query("INSERT INTO category set ?", newCategory, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
}),
  (Category.GetAll = function (result) {
    dbConn.query("Select * from category", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }),
  (Category.Edit = (result) => {
    dbConn.query(
      "UPDATE category SET name = ?, description = ? WHERE id = ?",
      newCategory,
      (err, res) => {
        if (err) {
          console.log(err);
          console.log(res);
        } else {
          res.send(result);
        }
      }
    );
  });

module.exports = Category;
