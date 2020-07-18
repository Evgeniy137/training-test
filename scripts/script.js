"use srict";


let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

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




console.log(personalMovieOB);