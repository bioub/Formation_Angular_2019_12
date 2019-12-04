function hello(name) {
  return "Hello " + name;
}

var names = ["Jean", "Eric"];

for (var i = 0; i < names.length; i++) {
  console.log(hello(names[i]));
}
