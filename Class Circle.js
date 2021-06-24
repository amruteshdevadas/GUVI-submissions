class Circle
{
  constructor(radius)
  {
    this.radius = radius;
  }
  getArea()
  {
    console.log((Math.PI*this.radius*this.radius).toFixed(2))
  }
  getCircumference()
  {
    console.log((2*Math.PI*this.radius).toFixed(2))
  }
}

let circle1 = new Circle(5);
circle1.getArea();
circle1.getCircumference();