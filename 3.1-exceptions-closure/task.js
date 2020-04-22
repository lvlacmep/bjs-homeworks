'use strict';
function parseCount(number) {
    const out = Number.parseInt(number);
    if ( isNaN(out) ) {
        throw new Error("Невалидное значение");        
    }
    return out;
}
function validateCount(number) {
    try {
        let out = parseCount(number);
        return out;
    }
    catch(e) {
        return new Error("Невалидное значение");
    }
}

class Triangle {
    constructor (a , b, c) {
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
        if ( this.sideA + this.sideB < this.sideC || this.sideB + this.sideC < this.sideA || this.sideA + this.sideC < this.sideB) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {        
        return this.sideA + this.sideB + this.sideC;
    }
    getArea() {        
        let p = this.getPerimeter() / 2;
        return +Math.sqrt(p*(p-this.sideA)*(p-this.sideB)*(p-this.sideC)).toFixed(3);
    } 
    
}
function getTriangle(a , b , c ) {
    try {
        const triangle = new Triangle(a, b, c);
        return triangle;
    }
    catch(e){
        const obj = {
          getPerimeter: () => "Ошибка! Неправильный треугольник",
          getArea: () => "Ошибка! Неправильный треугольник"
        }
        return obj;
    }
}