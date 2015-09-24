/**
 * Created by duc on 21/09/2015.
 */
function now(txt) {
    "use strict";
    console.log(new Date().toLocaleTimeString() + " " + txt);
}

function wait(miliSeconds) {
    "use strict";
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds) {}
}

now('> Start to wait');
wait(5000);
now('> Finish waiting');