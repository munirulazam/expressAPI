const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const categoryRouter = require("./src/routes/category.route");
const postRouter = require("./src/routes/post.route");

// app.use(express.static(__dirname + '/public'));
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/category", categoryRouter);
app.use("/post", postRouter);
// app.post('/tada' , (req, res) => {
//   console.log(req.files);
// })
const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
