const axios = require('axios');

const imagePromise = axios.get('https://api.thecatapi.com/v1/images/search');

function loadImageAsync(url) {
 return new Promise((resolve, reject) => {
   const img = new Image();
   img.addEventListener('load', event => resolve(img));
   img.addEventListener('error', reason => reject(new Error('Loading faild')));
   img.src = url;
 });
}

loadImageAsync('http://thecatapi.com/api/images/get?format=src&type=jpg&size=medium')
  .then(img => document.querySelector('.image').appendChild(img))
  .catch(reason => console.log(reason));