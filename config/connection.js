var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    root: 3306,
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "burgers_db",
  });
};

connection.connect(function (err) {
  if (err) throw err;
});


module.exports = connection;

