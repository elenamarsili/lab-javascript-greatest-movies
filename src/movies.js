// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (movies) {
    const directors = movies.map((movie)=>{
    const director = movie.director;
    return director
}); return directors
}

console.log(getAllDirectors(movies))

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (movies) {
    const spielbergDramaMovies = movies.filter((movie)=> {
    const spielbergMovies= [];
    if (movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama") !==-1){
      spielbergMovies.push(movie);
      return spielbergMovies}
    }); return spielbergDramaMovies.length 
  }
  
  console.log(howManyMovies(movies))
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length===0){return 0}
    const movieRates = movies.map ((movie) =>{
        if (!movie.rate){
            return 0;
        } else return movie.rate}); 
    const total = movieRates.reduce(function (acc, rate) {
    return (acc + Number(rate))
    },0); return Number((total/movies.length).toFixed(2))
  }
  
  console.log(ratesAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies

    function dramaMoviesRate(movies) {
        const dramaMovies = movies.filter((movie) => { 
            return movie.genre.indexOf("Drama") !==-1
        }); 
        const dramaRates = dramaMovies.map((drama)=>{
            let rates = drama.rate
            return rates
        }); const total= dramaRates.reduce(function(acc, rate) {
            return (acc + Number(rate))
        },0); 
        return dramaMovies.length ? Number((total/dramaMovies.length).toFixed(2)) : 0
    }

    console.log(dramaMoviesRate(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
        const newMovies = movies.map((movie)=> movie)
        const orderedMovies = newMovies.sort(function compare (a, b) {
            if (a.year === b.year){
                if (a.title< b.title){return -1;}
                else if (a.title>b.title){return 1}
                else {return 0}
                } 
        {return a.year - b.year; }        
    }); return orderedMovies
}

console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    const newMovies = movies.map((movie)=> movie)
    const orderedMovies = newMovies.sort(function compare (a, b) {
        if (a.title< b.title){return -1;}
        else if (a.title>b.title){return 1}
        else {return 0}
        }); 
        return orderedMovies.map((movie)=>{
            return movie.title
        }).slice(0,20)  
    }

console.log(orderAlphabetically(movies))
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
    const newMovies = movies.map((movie)=>{

        let newMovie = Object.assign({}, movie);
        let durationArray = movie.duration.split(" ");
        let total = 0;

        if (durationArray.length ===2){
            total = (parseInt(durationArray[0])*60) + parseInt(durationArray[1]);
        } else if (durationArray.length === 1 && durationArray[0].indexOf("h")>-1){
            total = (parseInt(durationArray[0])*60);
        } else if (durationArray.length === 1 && durationArray[0].indexOf("min")>-1){
            total = parseInt(durationArray[0]);
        }
        newMovie.duration = total;
        return newMovie;
    }); return newMovies
}

console.log(turnHoursToMinutes(movies))
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
