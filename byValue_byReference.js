/**
 * Created by duc on 20/09/2015.
 */
var a = 1,
    b = { foo: 'bar' },
    c = "Rock start",
    a_ = a,
    b_ = b,
    c_ = c;

//non object type parameters are passed by value
//object type params are passed by reference
function makeChange(_a, _b, _c) {
    "use strict";
    _a = 2;
    //arguments[1] = { foo: 'Fun qua' };
    _b.foo = 'Fun qua';
    _c = "Film Star";
}
makeChange(a, b, c);

console.log(a); // => true
console.log(b); // => true
console.log(c); // => true

console.log("a = ", a, ", b = ", b, ", c = ", c);

