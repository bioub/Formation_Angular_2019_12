
// try {
  // setTimeout(() => { throw new Error('E'); console.log('E') }, 50);
  setTimeout(() => console.log('A'), 500);
  setTimeout(() => console.log('B'), 0);
  setTimeout(() => console.log('C'), 1000);
  setTimeout(() => console.log('D'), 500);
  setTimeout(() => console.log('E'), Math.random() * 1001);
  setTimeout(() => console.log('F'), Math.random() * 1001);
// }
// catch(err) {

// }

console.log('FIN');

// ^
// |                           lg          lg  lg            lg
// |st - st - st - st - lg ... cbB ...     cbA cbD ...       cbC
// +-----0---------------------3-----------501-502-----------1000--->
//                      FIN    B           A   D             C

// file d'attente (0ms) : cbB
// file d'attente (3ms) :
// file d'attente (500ms) : cbA - cbD
// file d'attente (501ms) : cbD
// file d'attente (502ms) :
// file d'attente (1000ms) : cbC
// file d'attente (1001ms) :
