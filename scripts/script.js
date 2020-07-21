"use srict";
/* test1 */

/* let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieOB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilmsStep1 = prompt("Один из последних просмотренных фильмов", ""),
    filMsassessmentStep1 = prompt("На сколько отцените его", "");

let lastFilmsStep2 = prompt("Один из последних просмотренных фильмов", ""),
    filMsassessmentStep2 = prompt("На сколько отцените его", "");

personalMovieOB.movies[lastFilmsStep1] = filMsassessmentStep1;

console.log(personalMovieOB); */

/* test2 */
/* let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
if(numberOfFilms < 10) {
    prompt("Просмотрено довольно мало фильмов");
    } else if (numberOfFilms >= 10 || numberOfFilms <= 30) {
        prompt("Вы классический зритель");
        } else if (numberOfFilms > 30) {
            prompt("Вы киноман");
            } else {
                prompt("Произошла ошибка");
                }

let personalMovieOB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++) {
let lastFilmsStep1 = prompt("Один из последних просмотренных фильмов", ""),
    filMsassessmentStep1 = prompt("На сколько отцените его", "");

if(lastFilmsStep1 != null && filMsassessmentStep1 != null && lastFilmsStep1 != "" && filMsassessmentStep1 != "" && lastFilmsStep1.length < 50) {
    personalMovieOB.movies[lastFilmsStep1] = filMsassessmentStep1; 
    console.log("done");
    }else {
    i--;
    }    
}  */

/* test3 */
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieOB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB (hiden) {
    if (!hiden) {
    console.log(personalMovieOB);
    } 
}
showMyDB ();

function writeYourGenres () {
    for(let i = 1; i >= 3; i++) {
        personalMovieOB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres ();
console.log(personalMovieOB);





/* let lastFilmsStep1 = prompt("Один из последних просмотренных фильмов", ""),
    filMsassessmentStep1 = prompt("На сколько отцените его", "");

let lastFilmsStep2 = prompt("Один из последних просмотренных фильмов", ""),
    filMsassessmentStep2 = prompt("На сколько отцените его", "");

personalMovieOB.movies[lastFilmsStep1] = filMsassessmentStep1;

console.log(personalMovieOB);
 */



