// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

var Righttriangle = function(side1, side2, base) {
  this.area = function(side1, base) {
    return (side1 * base)/2;
  };
  this.perimeter = function(side1, side2, base) {
    return side1 + side2 + base;
  };
}


// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.

var triangle1 = new Righttriangle(5, 10, 2);
var triangle2 = new Righttriangle(3,3,3);
console.log(triangle1);
console.log(triangle2);
