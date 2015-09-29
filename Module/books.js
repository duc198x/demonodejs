/**
 * Created by duc on 29/09/2015.
 */
module.exports = function(sequelize, dataType) {
    var books = sequelize.define("books", {
        BookCode: {
            type: dataType.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true
        },

        BookTitle: {
            type: dataType.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [0,100],
                    mes: "Tieu de sach qua dai"
                }
            }
        },

        Author: {
            type: dataType.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [0,50],
                    mes: "Viet ten tac gia vua vua thoi"
                }
            }
        },

        Edition: {
            type: dataType.INTEGER
        },

        BookPrice: {
            type: dataType.FLOAT
        },
        Copies: {
            type: dataType.INTEGER
        }
    });
    return books;
};