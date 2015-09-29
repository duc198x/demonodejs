/**
 * Created by duc on 29/09/2015.
 */
var db = require('./db1');

db.books = db.import(__dirname + '/modules/books.js');
db.members = db.import(__dirname + '/modules/members.js');
db.details = db.import(__dirname + '/modules/issueDetails.js');

//Relation
db.books.hasMany(db.details, {foreignKey: 'BookCode'});
db.details.belongsTo(db.books, {foreignKey: 'BookCode'});

db.members.hasMany(db.details, {foreignKey: 'MemberCode'});
db.details.belongsTo(db.members, {foreignKey: 'MemberCode'});

db.sync({force: true});