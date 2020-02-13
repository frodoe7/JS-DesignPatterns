// Decorator Pattern
// ? add new features to existing object without manipulating the class

class car
{
    constructor(model , color)
    {
        this.model = model;
        this.color = color;
    }
}

car.prototype.sayHi = function () {
    console.log("Hi , My model :" , this.model , " - My color :" , this.color)
}

var Car1 = new car("Fiat 128" , "red");

Car1.setSpeed = function (speed) {
    this.speed = speed;
}

Car1.getSpeed = function () {
    return this.speed;
}

module.exports = Car1;