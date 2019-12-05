var globaleOuModule = 'globaleOuModule';

function externe() {
  var closure = 'closure';

  function interne() {
    var locale = 'locale';
    console.log(locale);
    console.log(closure);
    console.log(globaleOuModule);
  }

  interne();
}

externe();
console.log(typeof interne); // undefined

// pile d'appels
// ^
// |lg - lg - lg
// |interne
// |externe
// +---------------------------> temps
