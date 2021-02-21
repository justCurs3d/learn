"use strict";

let numberOfFilms = + prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10){
    alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    alert('Вы улассический зритель');
} else if (personalMovieDB.count > 30){
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

for(let i = 0; i < 2; i++){
    let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

    if(a != '' && b != '' && a != null && b != null && a.length < 51){
        personalMovieDB.movies[a] = +b;
        console.log('done');
    } else {
        alert('error');
        i--;
    }
}


console.log(personalMovieDB);