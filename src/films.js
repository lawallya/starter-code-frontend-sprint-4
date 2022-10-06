// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  /*let result =  ;
  console.log("EXERCICE 1 ->", result);

  return result;*/
  //SOLUCION 1, CON WHILE
 /* const result = movies.map(pelicula => pelicula.director);
    console.table(result);
    let long= result.length;
    let i = 0;
  
    result.sort();
    console.table(result);
  while (i < long){
    if ( result[i] === result[i+1]){ result.splice[i+1, 1]}
    else { i++}
  }
  console.table(result);
  return result;*/
// SOLUCION 2: 
let result = movies.map(pelicula => pelicula.director);
result.sort(); //ordena el array alfabeticamente.
resultado = result.reduce(funcion,vableInicialización);
//¿tengo que definir el array vacio que voy a rellenar?
 function(array, elemento){
  array.find(e);
  result.forEach()

 }






}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
