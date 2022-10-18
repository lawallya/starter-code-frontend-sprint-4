// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  console.log(getAllDirectors);
    const result = movies.map(pelicula => pelicula.director);
    result.sort();
    //console.table(result);//devuelve el array con los directores ordenados alfabéticamente, pero sin simplificar
    return result; 
}



// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  
  return result;

}

// Exercise 3: Calculate the average of the films of a given director. Devuelve un numero con dos decimales.
function moviesAverageOfDirector(array, director) {


}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

}

// Exercise 5: Order by year, ascending 
//y las peliculas de un mismo año ordenadas alfabéticamente
function orderByYear(array) {






}



// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(category, value) {

}

// Exercise 7: Modify the duration of movies to minutes, devuelve un nuevo array con las peliculas en minutos
//tanto si en la duracion aparece en h y min, solo h o solo min.
function hoursToMinutes(array) {



}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(año) {

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
