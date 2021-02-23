"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
    
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        alert('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        alert('Вы улассический зритель');
    } else if (personalMovieDB.count > 30){
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    }
}

start();

rememberMyFilms();

detectPersonalLevel();

showMyDb(personalMovieDB.privat); 