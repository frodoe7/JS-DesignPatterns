// Prototype Pattern
// ? Create a function prototype , instead of copying it many times

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

module.exports = car;