/**
 * Created by duc on 20/09/2015.
 */
function swap(a,b) {
    "use strict";
    var tmp = a;
    a = b;
    a = tmp;    //assign tmp to b
}

var x = 1, y = 2;
swap(x, y);

console.log("x = " + x + ", y = " + y);  // x equal to 1, y = 2
