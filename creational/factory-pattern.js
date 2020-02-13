// Factory Pattern
// ? parent wrapper to return the sub-classes

class car
{
    constructor(model , color)
    {
        this.model = model;
        this.color = color;
    }
    
    sayHi () {
        console.log("Hi , My model :" , this.model , " - My color :" , this.color)
    }
}

class robot
{
    constructor(name , color)
    {
        this.name = name;
        this.color = color;
    }
    
    sayHi () {
        console.log("Hi , My name :" , this.name , " - My color :" , this.color)
    }
}

var classFactory = function (classType)
{
    if (classType == "car")
       return car;
    if (classType == "robot")
       return robot;
}

module.exports = classFactory;