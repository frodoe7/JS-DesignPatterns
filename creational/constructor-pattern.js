// Constructor Pattern
// ? create objects from functions

'use strict'

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

module.exports = car;