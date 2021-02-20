"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
count: numberOfFilms,
movies: {
    film: prompt('Один из последних просмотренных фильмов?', ''),
    value: +prompt('На сколько оцените его?', '')
},
actors: {},
genres: [],
privat: false
};
