function result() {
    let unitChanger = {
        ['cm']: 1,
        ['mm']: 10,
        ['m']: 100
    }

  class Figure {
    constructor() {
      this.units = "cm";
    }

    get area() {
      return;
    }

    changeUnits(value) {
      this.units = value;
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  class Circle extends Figure{
    constructor(radius, units){
        super(units)
        this.radius = Number(radius);
    }

    get area() {
        return Number(Math.PI * Number(this.radius * unitChanger[this.units]) * Number(this.radius * unitChanger[this.units]));
    }

    toString(){
        return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius * unitChanger[this.units]}`;
    }
  }

  class Rectangle extends Figure{
    constructor( width, height, units){
        super(units)
        this.width = width;
        this.height = height;
        this.units = units
    }

    get area() {
        return (this.width * unitChanger[this.units]) * (this.height * unitChanger[this.units]);
    }

    toString(){
        return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width * unitChanger[this.units]}, height: ${this.height * unitChanger[this.units]}`;
    }
  }

  return {
    Figure,
    Circle,
    Rectangle
  }
}

let classes = result();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, "mm");
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits("cm");
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits("mm");
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
