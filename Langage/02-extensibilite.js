const coords = {
  x: 1,
  y: 2,
};

console.log(coords.x);
console.log(coords.y);

coords.z = 3;

console.log(coords.z);

// function Coords(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Coords.prototype.infos = function() {
//   return 'x: ' + this.x;
// }

// equivalent ES6 à constructor function + prototype
class Coords {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  infos() {
    return 'x: ' + this.x;
  }
}


const coords1 = new Coords(1, 2);
console.log(coords1.x);
console.log(coords1.infos()); // x: 1
