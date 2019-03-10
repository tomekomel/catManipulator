const axios = require('axios');

const p = new Promise((resolve, reject) => {
  resolve(5);
});

p.then(result => result * 2)
  .then(result => result * 2)
  .then(result => console.log(result))
  .catch(reason => console.log(reason));

const movies = [{id: 1, categoryId: 1, title: 'The Help'}];

const categories = [{id: 1, name: 'Fabulary'}];

function fetchMovie(movieId) {
  return new Promise((resolve, reject) => {
    const movie = movies.find(movie => movie.id === movieId);
    if (movie) {
      resolve(movie);
    }
    reject(Error(`Movie was not found`));
  });
}

function populateCategory(movie) {
  return new Promise((resolve, reject) =>
  {
    const category = categories.find(category => category.id === movie.categoryId);
    if (category) {
      movie.category = category.name;
      resolve(movie);
    }
    reject(Error(`Category was not foudn`));
  });
}

fetchMovie(1)
  .then(movie => populateCategory(movie))
  .then(result => console.log(result))
  .catch(reason => console.log(reason));

