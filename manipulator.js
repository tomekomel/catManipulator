const axios = require('axios');

const p = new Promise((resolve, reject) => {
  resolve(5);
});

p.then(result => result * 2)
  .then(result => Promise.reject(Error(`Ops!`)))
  .then(result => console.log(result))
  .catch(reason => console.log(reason));
