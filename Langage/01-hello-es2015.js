function hello(name) {
  return `Hello ${name}`;
}

const names = ['Jean', 'Eric'];

for (const name of names) {
  console.log(hello(name));
}
