/**
 * Created by duc on 20/09/2015.
 */
function swap(object) {
    "use strict";
    var tmp = object["a"];  //object.a
    object["a"] = object["b"];  //object.a = object.b
    object["b"] = tmp; //assign tmp to b
}
var obj = {a: 1, b: 2};
swap(obj);
console.log("after swap: ", obj);

function swap1(object, a, b) {
    "use strict";
    var tmp = object[a];
    object[a] = object[b];
    object[b] = tmp; //assign tmp to b
}
var obj1 = {x: 1, y: 2};
swap1(obj1, "x", "y");
console.log("after swap: ", obj1);