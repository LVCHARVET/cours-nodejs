const https = require('https');
const options = {                                 
  protocol: 'https:',
  host: 'apprendre-nodejs.fr',
  path: '/v1/package.json',
  method: 'HEAD',
};

const request = https.request(options);
request.setHeader('Accept', 'application/json');  
request.end();                                    

request.on('response', (response) => {
  const lastModified = response.headers['last-modified'];

  console.log('Modifié le %s', lastModified);     
});