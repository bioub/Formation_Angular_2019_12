const fs = require('fs');

try {
  const content = fs.readFileSync('.editorconfig', {encoding:'utf-8'});
  fs.writeFileSync('.editorconfig.copy', content);
  console.log('Copy done');
} catch (err) {
  console.log(err);
}


// Callback Hell / Pyramid of Doom
fs.readFile('.editorconfig', {encoding:'utf-8'}, (err, content) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('.editorconfig.copy', content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy done');
      }
    });
  }
});

// Promise (voir aussi Defered)
// Historiquement on utilisait des libs comme bluebird ou q
// En ES2015 ajouté à JS
fs.promises.readFile('.editorconfig', { encoding: 'utf-8'} )
  .then((content) => fs.promises.writeFile('.editorconfig.copy', content))
  .then(() => console.log('Copy done'))
  .catch((err) => console.log(err));


// ES2017 fonction async
(async function() {
  try {
    const content = await fs.promises.readFile('.editorconfig', {encoding:'utf-8'});
    await fs.promises.writeFile('.editorconfig.copy', content);
    console.log('Copy done');
  } catch (err) {
    console.log(err);
  }
})();


// Stage 3 TC39 fonction async
// try {
//   const content = await fs.promises.readFile('.editorconfig', {encoding:'utf-8'});
//   await fs.promises.writeFile('.editorconfig.copy', content);
//   console.log('Copy done');
// } catch (err) {
//   console.log(err);
// }
