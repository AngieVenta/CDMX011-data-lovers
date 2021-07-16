import { ghibliPoster } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

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