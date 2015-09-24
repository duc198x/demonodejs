/**
 * Created by duc on 22/09/2015.
 */
function now(txt) {
    "use strict";
    console.log(new Date().toLocaleTimeString() + ' ' + txt);
}

function wait(fn, miliSeconds) {
    "use strict";
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds) {

    }
    fn();
}
now("> Start to wait");
setTimeout(function() {
    "use strict";
    now("> End of waiting");
;}, 2000);

now("> Do other task");