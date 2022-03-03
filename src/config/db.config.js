const mysql = require("mysql");
const env = require("dotenv").config();
//local mysql db connection
const dbConn = mysql.createConnection({
  host: `${process.env.DB_HOST}`,
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
  database: `${process.env.DB_NAME}`,
});
dbConn.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Database Connected!");
  }
});
module.exports = dbConn;
