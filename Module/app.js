/**
 * Created by duc on 24/09/2015.
 */
"use strict";
const foo = require("./foo");
const foo2 = require("./foo2");
const string = require("./string");
console.log(foo);
foo.sayHelloInEnglish();
foo.sayHelloInVietnamese();
foo2.sayHelloInJapanese();
foo2.sayHelloInGerman();

string.invert("Hallo");
string.camelCase("la lA la");
string.longestWord("Everything is simple only when you think of simple");