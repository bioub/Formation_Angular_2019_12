function bonjour(name: string) {
  return `Bonjour ${name}`;
}

const prenoms = ['Jean', 'Eric'];

for (const prenom of prenoms) {
  console.log(bonjour(prenom));
}
