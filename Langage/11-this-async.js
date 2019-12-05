class Contact {
  constructor(prenom) {
    this.prenom = prenom;
  }
  hello() {
    console.log(`Hello ${arguments[0]}, hello ${arguments[1]}, my name is ${this.prenom}`);
  }
  helloAsync() {
    setTimeout(() => {
      console.log('Hello my name is ' + this.prenom);
    }, 1000)
  }
}


const romain = new Contact('Romain');
romain.hello('Jean', 'Eric');
romain.helloAsync();
