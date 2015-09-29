/**
 * Created by duc on 29/09/2015.
 */
module.exports = function(sequelize, dataType) {
    var members = sequelize.define("members", {
        MemberCode: {
            type: dataType.INTEGER,
            unique: true,
            primaryKey: true,
            allowNull: false
        },

        Name: {
            type: dataType.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [0,50],
                    mes: "Ten gi ma dai the? Ngan gon lai di"
                }
            }
        },

        Address: {
            type: dataType.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [0,100],
                    mes: "Lay bo! Dia chi gi ma dai vai"
                }
            }
        },

        PhoneNumber: {
            type: dataType.INTEGER,
            validate: {
                len: {
                    args: [0,12],
                    mes: "Nhap qua so dien thoai roi"
                }
            }
        }
    });
    return members;
};