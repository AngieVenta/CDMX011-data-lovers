// estas funciones son de ejemplo

// export const maping = (data) => {
//   let posters2 = []

//   data.films.forEach(movie => {
//       posters2 += `
//         <div class="card_film">
//             <img src=${movie.poster}>
//             <h2>${movie.title}</h2>
//         </div>
//       `
//   })
//   return posters2
// };

// export const sortDataA = (data) => {
//   const sortRelease = data.films.sort((a,b) => (a.title > b.title ? 1 : -1)); 
//  return sortRelease;
//  }
// // export const alphabeticalSort = (data) => {
// //   let result = data.films.sort((a, b) => {
// //     const titleA = a.title
// //     const titleB = b.title
// //     if (titleA < titleB) {
// //       return -1;
// //     }
// //     if (titleA > titleB) {
// //       return 1
// //     } else{
// //       return 0;
// //     }
// //   })
// //   return result;
// // } 

// export const sortData = (data) => {
//    const sortRelease = data.films.sort((a,b) => (a.release_date > b.release_date ? 1 : -1)); 
//   return sortRelease;
  
// } 

const sortData = (data) =>  data.sort((a,b) => a.release_date > b.release_date ? 1 : -1); 
  export const sortAscending = (data) => sortData(data);
  export const sortDescending = (data) => sortAscending(data).reverse();

  export const sortAlphabetic = (data) => data.sort((a,b) => a.title > b.title ? 1 : -1);

const sortRate = (data) =>  data.sort((a,b) => a.rt_score - b.rt_score);
  export const sortWorst = (data) =>  sortRate(data);
  