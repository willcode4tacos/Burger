var orm = require("../config/orm")

var burger = {
  selectAll: function (callback) {
    orm.selectAll(function (res) {
      callback(res)
    })
  },
  insertOne: function (burger, callback) {
    orm.insertOne(burger, function (res) {
      callback(res)
    })
  },
  updateOne: function (burger, callback) {
    orm.updateOne(burger, function (res) {
      callback(res)
    })
  }
}

module.exports = burger;