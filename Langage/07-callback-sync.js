const prenoms = ['Jean', 'Eric', 'Romain'];

// Style/paradigme impératif
for (let i = 0; i < prenoms.length; i++) {
  const prenom = prenoms[i];
  if (prenom.length === 4) {
    const prenomMaj = prenom.toUpperCase();
    console.log(prenomMaj);
  }
}

// Style/paradigme fonctionnel (ES5+)
prenoms.filter((prenom) => prenom.length === 4)
       .map((prenom) => prenom.toUpperCase())
       .forEach((prenomMaj) => console.log(prenomMaj));

console.log('FIN')
// ^
// |                         lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach - lg
// +--------------------------------------->
//                           JEAN ERIC FIN
