import { sortAscending, sortDescending, sortAlphabetic, sortWorst} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

var films = document.getElementById('films')
const movies_button = document.getElementById('movies_button');
const home = document.getElementById('home')
const home_button = document.getElementById('home_button');
const selector = document.querySelector(".sortMovies");

home_button.addEventListener('click', () => {
    home.style.display = "block";
    films.style.display = "none";
})

function printFilms(data){
    document.getElementById("films").innerHTML = data.map((movie) => `
    <div class="card_film">
        <img src=${movie.poster} class = "posterimg" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <h3 class="releaseDate"> Release date: ${movie.release_date} </h3>
        <span class = "rate"> Score: ${movie.rt_score}</span>  
        <div class= "movie_info">
        <p class="description"> Description: ${movie.description} </p>
        <p class="director"> Director: ${movie.director} </p>
        <p class="producer"> Producer: ${movie.producer} </p>
        </div>
    </div>
    `)
}

printFilms(data.films);
// let moviesMaped = maping(data);
// films.innerHTML = moviesMaped; 

movies_button.addEventListener('click', () => {
    home.style.display = "none";
    films.style.display = "flex";
})

// const selectElement = document.querySelector(".sortMovies");
// selectElement.addEventListener('change', (event) => {
//     if(selectElement.value === "alphabetic"){
//         event = sortDataA(data.films, selectElement.value);
//         maping(event);  
//     } 
// });

// const select = document.querySelector(".sortMovies");
// select.addEventListener("change", sortMovies);

// function sortMovies(){
//     let sortValue = select.value;
//     let sortTitles = [];
//     if (sortValue === "alphabetic"){
//         sortTitles = alphabeticalSort(data.films);        
//     }
//}
selector.addEventListener("change", clasificar);
function clasificar(){
    let sortValue = selector.value;
    let sortTitles = [];
    if (sortValue === "releaseAscending"){
        sortTitles = sortAscending(data.films);
    } else if (sortValue === "releaseDescending"){
        sortTitles = sortDescending(data.films);
    } else if (sortValue === "alphabetic"){
        sortTitles= sortAlphabetic(data.films);
    } else if (sortValue === "score"){
        sortTitles= sortWorst(data.films);
    }
    printFilms(sortTitles);
}
