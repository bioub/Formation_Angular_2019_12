function save(backup) {
  return function() {
    console.log(backup);
  }
}

// sans closure : 3 3 3 dans 1s
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// avec closure : 0 1 2 dans 1s
for (var i = 0; i < 3; i++) {
  setTimeout(save(i), 1000);
}

// avec closure : 0 1 2 dans 1s
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}


