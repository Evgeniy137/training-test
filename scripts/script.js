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
/* let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

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
 */

/* test4 */

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            } 
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};