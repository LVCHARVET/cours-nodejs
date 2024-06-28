const { get } = require('https');
let count = 0;

get('https://apprendre-nodejs.fr/v1/index.html', response => {
  response.on('data', (data) => {
    count = count + 1;
    const ko = data.length / 1024;
    console.log('Morceau #%d : %iKo', count, ko);
  });

  response.on('end', () => {
    console.log('Fini (%d morceaux)', count);
  });
});