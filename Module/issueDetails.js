/**
 * Created by duc on 29/09/2015.
 */
module.exports = function(sequelize, dataType) {
    var details = sequelize.define("details", {
        BookCode: {
            type: dataType.INTEGER,
            primaryKey: true
        },

        MemberCode: {
            type: dataType.INTEGER,
            primaryKey: true
        },

        IssueDate: {
            type: dataType.DATE
        },

        ReturnDate: {
            type: dataType.DATE
        }
    });
    return details;
};