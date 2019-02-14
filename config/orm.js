var db = require("./connection")

var orm = {

  selectAll: function (callback) {
    db.query("SELECT * FROM burgers", function (error, results) {
      if (error) throw error
      callback(results)
    })
  },
  insertOne: function (burger, callback) {
    db.query("INSERT INTO burgers SET ?", burger, function (error, results, fields) {
      if (error) throw error;
      callback([burger, results.insertId])
    });
  },
  updateOne: function (burger, callback) {
    db.query('UPDATE burgers SET devoured = ? WHERE id = ?', [burger.devoured, burger.id], function (error, results, fields) {
      if (error) throw error;
      callback(burger)
    })
  }
}



module.exports = orm;