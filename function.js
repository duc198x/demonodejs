/**
 * Created by duc on 21/09/2015.
 */
function add(a,b) {
    "use strict";
    return a + b;
}
console.log(add(2,3));

var cong = add;
console.log(cong(2,3));

var square = function(x) {
    "use strict";
    return x * x;
};
console.log(square(10));

add.description = function() {
    "use strict";
    console.log("Add two numbers");
};
add.description();
add.description.help = function() {
    "use strict";
    console.log("input two numbers");
};
add.description.help();
//add --> description --> help
//Handling Exception
var addSafe = function(a, b) {
    "use strict";
    if (typeof a !== "number" || typeof b !== "number") {
        throw {
            name: "TypeError",
            message: "addSafe requires number parameters"
        };
    }
    return a + b;
};

addSafe(10, 20);

//Function return function
function arithmetic(operatorString) {
    "use strict";
    switch (operatorString) {
        case '+':
            return function(a, b) {
                return a + b;
            };
        case '-':
            return function(a, b) {
                return a - b;
            };
        case '*':
            return function(a, b) {
                return a * b;
            };
        case '/':
            return function(a, b) {
                return a / b;
            };
    }
}

var x = arithmetic("-")(20, 10);
console.log(x);
var y = arithmetic("*");
console.log(y(20,10));
var z = arithmetic("/")(20, 10);
console.log(z);

//Function nested inside a function
function makeACupOfCoffe() {
    "use strict";
    function boilWater(temperature) {
        console.log("Boil water at ", temperature);
    }
    function mixCoffeWithMilkAndSugar() {
        console.log("Mix coffee with milk and sugar");
    }
    boilWater(100);
    mixCoffeWithMilkAndSugar();
}

makeACupOfCoffe();

var numberObj =  function(val) {    //outer scope
    "use strict";
    var value = parseFloat(val);
    //Closure
    return {    //return a object that have two properties: absolute and square
        absolute: function() {  //inner scope
            return value > 0 ? value : -value;
        },
        square: function() {
            return value * value;
        }
    };
}(-10);

console.log(numberObj.absolute(), numberObj.square());
console.log(numberObj);