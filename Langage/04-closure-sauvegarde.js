var globaleOuModule = 'globaleOuModule';

function externe(msg) {
  var closure = 'closure';

  function interne() {
    var locale = 'locale';
    // console.log(locale);
    // console.log(closure);
    console.log(msg);
    // console.log(globaleOuModule);
  }

  return interne;
}

const hello = externe('Hello');
hello();
const bonjour = externe('Bonjour');
bonjour();
hello();
bonjour();
console.log(typeof interne); // undefined

// pile d'appels
// ^
// |          lg - lg - lg
// |externe - hello/interne
// +---------------------------> temps
