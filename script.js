// get set shapes


//complete this code
 class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    getArea() {
      return this.width * this.height;
    }
  }

  // Square class (inherits from Rectangle)
  class Square extends Rectangle {
    constructor(side) {
      super(side, side); // Pass the same value for width and height
    }

    getPerimeter() {
      return 4 * this.width; // Perimeter of a square (4 * side)
    }
  }

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;