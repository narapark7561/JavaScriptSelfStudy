"use strict";

// In heritance
// a way for one class to extend another class.

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  } //ES6 클래스안에 메서드 정의할때 메서드이름과 함수내용만써준다. without function draw()

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); //부모의것을 받으면서 추가적으로 더 할수있께  override
    console.log("🔼");
  }
  getArea() {
    return (this.width * this.height) / 2;
  } //상속받다가 필요한것만 override하면된다!
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());
