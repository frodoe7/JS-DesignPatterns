// Module Pattern
// ? it's like a box contains some services - technically object contains some functions

var robot = function() {
  var xPos = 0;
  var yPos = 0;

  var setPosition = function(x, y) {
    xPos = x;
    yPos = y;
  };

  var move = function(x, y) {
    xPos += x;
    yPos += y;
  };

  var getCurrentPosition = function() {
    return { xPos, yPos };
  };

  var sayHi = function() {
    console.log("Hi , I'm robot!!");
  };

  return { setPosition , getCurrentPosition , move , sayHi };
};

module.exports = robot;
