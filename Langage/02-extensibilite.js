// object -> dictionnaire
// En PHP -> Tableau associatif
// En Java -> Map
// Python -> dict
// C++ -> HashTable

// object literal
const coords = {
  x: 1,
  y: 2,
};

console.log(coords.x);
console.log(coords.y);

// Extensibilité
coords.z = 3;

console.log(coords.z);
console.log(coords['z']);
const key = 'z';
console.log(coords[key]);

// Supprimer des clés
delete coords.z;

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

console.log(coords1.hasOwnProperty('x')); // true
console.log(coords1.hasOwnProperty('infos')); // false


for (var prop in coords1) {
  if (coords1.hasOwnProperty(prop)) {
    console.log(coords1[prop]);
  }
}
