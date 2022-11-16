const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "qwerty",
  database: "max",
});

conn.connect((err) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log("DataBase ------ ok");
  }
});

let query = "SELECT * FROM user";

const res = conn.query(query, (err, result, field) => {
  return result;
});

console.log(res);

conn.end((err) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log("DataBase ------ end");
  }
});
