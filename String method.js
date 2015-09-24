/**
 * Created by duc on 20/09/2015.
 */
var quotes = "Darkness cannot drive out darkness; " +
        "only light cant do that. " +
        "Hate cannot drive out hate; " +
        "only love can do that. ";
console.log(quotes);
var firstPost = quotes.indexOf("only");
var lastPost = quotes.lastIndexOf("only");
console.log("firstPost = ", firstPost, ", lastPost = ", lastPost);

var canPost = quotes.search(/ca.t/);   //Regular Expression
console.log(canPost);

var contact = "phone 0932387886 Duc";
var phonepos = contact.search(/[0-9]/);
console.log(phonepos);

var ilove = "Ilove PHP. PHP file extension is php. Php is good language.";
var iloveNode = ilove.replace(/PHP/ig, "Node.js");
console.log(iloveNode);
//i: make case insensitive
//g: global
//m: multi-line

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);

var res2 = str.slice(-12, -6);
console.log(res2);

console.log(str.substring(7, 13));

console.log(str.toLowerCase());
console.log(str.toUpperCase());

var fruits = str.split(", ");
console.log(fruits);

var love = "LOVE";
for (var i = love.length-1; i >= 0; i--) {
        console.log(love.charAt(i));
}

String.prototype.reverse = function() {
        "use strict";
        var result = "";
        for (var i = this.length-1; i >= 0; i--) {
                result += this.charAt(i);
        }
        return result;
};

console.log(str.reverse());
console.log(love.reverse());
console.log("Hello!".reverse());