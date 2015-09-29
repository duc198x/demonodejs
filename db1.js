/**
 * Created by duc on 29/09/2015.
 */
var Sequelize = require('sequelize');

var db = new Sequelize("postgres://duc:123456@localhost:5432/BookStore");

module.exports = db;