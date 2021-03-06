/**
 * Created by duc on 19/09/2015.
 */
// n!. Vi du 3! = 1 * 2 * 3, 4! = 3! * 4, N! = (N - 1)! * N
function factorial(n) {
    if (typeof (n) != "number") {
        return NaN;
    }
    if (n === parseInt(n)) {
        if (n <= 1) {
            return 1;
        } else {
            var result = 1;
            for (var i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        }
    }
}

//Recursive function
function fact(n) {
    if (typeof (n) != "number") {
        return NaN;
    }
    if (n === parseInt(n)) {
        //Stack Overflow
        if (n <= 1) {   //End point of recursive function
            return 1;
        } else {
            return n * fact(n-1);
        }
    }
}

console.log(factorial(5));
console.log(fact(5));