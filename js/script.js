"use strict";

let personalMovieDB = {
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

    rememberMyFilms: function(){
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10){
            alert('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            alert('Вы улассический зритель');
        } else if (personalMovieDB.count > 30){
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },

    showMyDb: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres:function() {
        for(let i = 0; i < 3; i++){
            personalMovieDB.genres[i] = prompt(`Ваши любимый жанр под номером ${i + 1}`, '');

            if(personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null || personalMovieDB.genres[i].length >= 51){
                console.log('error');
                i--;
            }
        }

        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
    },
    toggleVisibleMyDB: function(){
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};
 
personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDb();