
// setTimeout((delayMs) => {
//   console.log(delayMs + 'ms')
//   setTimeout((delayMs) => {
//     console.log(delayMs + 'ms')
//   }, 1000, 1000);
// }, 1000, 1000);

// function timeout(delayMs) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(delayMs);
//     }, delayMs);
//   });
// }

// timeout(1000)
//   .then((delayMs) => console.log(delayMs + 'ms'));

const { Observable } = require('rxjs');

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(delayMs);
    }, delayMs);
  });
}

interval(1000)
  .subscribe((delayMs) => console.log(delayMs + 'ms'));
