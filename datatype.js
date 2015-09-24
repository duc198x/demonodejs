/**
 * Created by duc on 19/09/2015.
 */
"use strict";
var age =  "Duc";
const pi = 3.14158;
console.log(typeof pi);

if (parseInt(age)) {
    console.log("Age is number");
} //NaN

var myage = "A2A";
var myage2 = parseInt(myage);

//Boolean
var nodejs_slow = false;
var iojs_fast = true;

if (nodejs_slow) {
    console.log("Node.js is slow");
} else {
    console.log("Node.js is fast");
}

if(!nodejs_slow) {
    console.log("Node.js is not slow");
}

if (!nodejs_slow && iojs_fast) {
    console.log("Both Node.js and iojs are fast");
}

//String
var best_film = "Gone with the wind";
var best_hero = 'Bat man';
var best_player = 'B\'jorka';
console.log(best_player);

var my_folder = "/Volumes/MacBackup/Data/";
console.log(my_folder);

//Object
var duc = {firstName: "Duc", lastName: "Ngo"};
var book = {name: "Java Cookbook", author: duc};
console.log(book.name);
console.log(book.price);
book.price = 100;
console.log(book.price);
duc.firstName = "Trung";
console.log(book.author);