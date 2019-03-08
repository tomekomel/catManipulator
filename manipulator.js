const arithmetic = require('arithmetic');
const axios = require('axios');

const res = arithmetic.add(37, 37);

//axios.default.headers.common['x-api-key'] = 'e3253df8-8a0b-4043-9969-a19c7f8f2651';

const imagePromise = axios.get('https://api.thecatapi.com/v1/images/search');
imagePromise.then(
  setCatImage,
  reason => console.log(reason)
);

function setCatImage(response) {
  document.getElementById('cat_image').setAttribute('src', response.data[0].url);
}

