// estas funciones son de ejemplo
<<<<<<< HEAD
import data from './data/ghibli/ghibli.js'
export const ghibliPoster = data.films.map(data => [`${data.poster}`]);
=======
>>>>>>> ed9cd2df77b80034bc0c135b7a9a0d6fdb8ee1a2

export const maping = (data) => {
  let posters2 = []

  data.films.forEach(movie => {
      posters2 += `
        <div class="card_film">
            <img src=${movie.poster}>
            <h2>${movie.title}</h2>
        </div>
      `
  })
  return posters2
};

export const anotherExample = () => {
  return 'OMG';
};
