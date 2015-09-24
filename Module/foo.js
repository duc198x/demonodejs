/**
 * Created by duc on 24/09/2015.
 */
var foo2 = require("./foo2");

module.exports = {
    something: 123,
    sayHelloInEnglish: function() {
        console.log("Hello");
    },
    sayHelloInVietnamese: function() {
        console.log("Xin chao");
        foo2.sayHelloInGerman();
    },
};

