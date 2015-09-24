/**
 * Created by duc on 24/09/2015.
 */
module.exports.invert = function(word) {
    var result = "";
    for (var i = word.length - 1; i >=  0; i--) {
        result += word.charAt(i);
    }
    console.log(result);
};

module.exports.camelCase = function(sentence) {
    var result = "";
    var prevChar = undefined;
    for (var i = 0; i < sentence.length; i++) {
        var currentChar = sentence.charAt(i);
        if (i == 0 || prevChar == " ") {
            result += currentChar.toUpperCase();
        } else {
            result += currentChar.toLowerCase();
        }
        prevChar = currentChar;
    }
    console.log(result);
};

module.exports.longestWord = function(string) {
    var array = string.split(" ");
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (max > array[i]) {
            max = array[i];
        }
    }
    console.log(max);
};
