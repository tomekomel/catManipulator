const arithmetic = require('arithmetic');
const axios = require('axios');

const res = arithmetic.add(37, 37);

//axios.default.headers.common['x-api-key'] = 'e3253df8-8a0b-4043-9969-a19c7f8f2651';

const imagePromise = axios.get('https://api.thecatapi.com/v1/images/search');
imagePromise.then(
  setCatImage,
  logError
);

function setCatImage(response) {
  document.getElementById('cat_image').setAttribute('src', response.data[0].url);
}

function logError(reason)
{
  console.log('Error log: ' + reason);
}

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("itpracownia"));
  }, 2000);
});

newPromise
  .then(result => console.log(result))
  .catch(reject => console.log(reject));