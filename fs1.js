'use strict';
var fs = require('fs');

var name = "index.html";

var checkFile = function(dir, fileName) {
    return fs.readdir(__dirname + '/' + dir, function(err, check) {
        for (var i = 0; i < check.length; i++) {
            if (check[i] === fileName)
                return console.log("This file existed in folder");
        }
        return console.log("This file did not exist in folder");
    });
};

 checkFile('views', name);

//var processData = process.argv;
//
//var filename = processData[0];
//var dirname = processData[1];
//
//console.log(filename, dirname);