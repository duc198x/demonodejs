/**
 * Created by duc on 21/09/2015.
 */
function Robot(type) {  //-->Constructor function
    "use strict";
    this.type = type;
}

var flyRobot = new Robot("fly");
var diveRobot = new Robot("dive");

Robot.prototype.speak = function (text) {
    "use strict";
    console.log(this.type + "Robot says '" + text + "'");
};

flyRobot.speak("Hello World");  //sử dụng lại function speak định nghĩa ở Robot.prototype
diveRobot.speak("I swimming");

//Các đối tượng sau khi kế thừa có thể tự định nghĩa phương thức riêng cho mình
flyRobot.talk = function() {
    "use strict";
    console.log("I am talking");
};
flyRobot.talk();