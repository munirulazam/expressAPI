const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + req.body.id + "-" + Date.now() + ".jpg");
  },
});

const upload = multer({ storage });

router.get("/", (req, res) => {
  res.send("hi");
});

router.get("/test", postController.test);
router.post("/create", upload.single("image"), postController.createNew);
router.get("/getall", postController.getAll);

module.exports = router;
