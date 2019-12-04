function bonjour(name) {
    return "Bonjour " + name;
}
var prenoms = ['Jean', 'Eric'];
for (var _i = 0, prenoms_1 = prenoms; _i < prenoms_1.length; _i++) {
    var prenom = prenoms_1[_i];
    console.log(bonjour(prenom));
}
