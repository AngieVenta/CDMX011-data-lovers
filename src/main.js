<<<<<<< HEAD
import { ghibliPoster } from './data.js';
=======
import { maping } from './data.js';
>>>>>>> ed9cd2df77b80034bc0c135b7a9a0d6fdb8ee1a2
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

<<<<<<< HEAD
document.querySelector(".homeWindow").addEventListener("click", () => {
    document.getElementById("home").style.display = "block";
    document.getElementById("films").style.display = "none";     
});

document.querySelector(".filmographyWindow").addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("films").style.display = "flex";    
});


let films =document.getElementById("films");
let posters = []

data.films.forEach(movie => {
    
    posters += `
        <div id = "films">
            <img src="${movie.poster}" class= "posterContainer">
            <h4 id = "title">${movie.title}</h4>
        </div>
    `
    films.innerHTML = posters;
    
})


console.log(data);
console.log(ghibliPoster);
=======
var films = document.getElementById('films')
const movies_button = document.getElementById('movies_button');
const home = document.getElementById('home')
const home_button = document.getElementById('home_button')


home_button.addEventListener('click', () => {
    home.style.display = "flex";
    films.style.display = "none";
})

let moviesMaped = maping(data)
films.innerHTML = moviesMaped

movies_button.addEventListener('click', () => {
    home.style.display = "none";
    films.style.display = "flex";
})
>>>>>>> ed9cd2df77b80034bc0c135b7a9a0d6fdb8ee1a2
