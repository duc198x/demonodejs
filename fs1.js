'use strict';
var fs = require('fs');

var checkFile = function(fileName, dirName) {
    return fs.readdir(dirName, function(err, check) {
        for (var i = 0; i < check.length; i++) {
            if (check[i] === fileName)
                return console.log("This file has existed in current folder");
        }
        return console.log("This file has not existed in current folder");
    });
};

var processData = process.argv;

var filename = processData[2];
var dirname = processData[3];

//checkFile(name, __dirname);

console.log(filename, dirname);

checkFile(filename, dirname);   // De dong nay thi chay commandline se nhan nhung "run file" lai khong dc