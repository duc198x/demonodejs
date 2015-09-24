/**
 * Created by duc on 19/09/2015.
 */
var cars = ["Saab", "Volvo", "BMW"];
//console.log(cars.valueOf());

/* for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

console.log(cars.join(" - ")); */
cars.push("Honda");
cars.push("Yamaha");
cars.push("Toyota");
console.log(cars.valueOf());

/*
while (cars.length > 0) {
    cars.pop();
    console.log(cars.valueOf());
}
*/
while (cars.length > 0) {
    cars.shift();
    console.log(cars.valueOf());
}

cars.push("Thaco");