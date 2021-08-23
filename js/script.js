"use strict";

let numberOfFilm;

function start() {
   numberOfFilm = +prompt("сколько фильмов вы уже посмотрели", '');
   while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
      numberOfFilm = +prompt("сколько фильмов вы уже посмотрели", '');

   }
}
// start();

const personalMovieDB = {
   count: numberOfFilm,
   movie: {},
   actors: {},
   genres: [],
   private: false

};





function rememberMyFilm() {
   for (let i = 0; i < 2; i++) {
      const questions1 = prompt('Один из послдених просмотренных фильмов', ''),
         questions2 = prompt('На сколько оцените его', '');


      if (questions1 != null && questions2 != null && questions1 != '' && questions2 != '' && questions1.length < 50) {
         personalMovieDB.movie[questions1] = questions2;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }

   }
}
// rememberMyFilm();

function detectPersonalLevel() {

   if (personalMovieDB.count < 10) {
      console.log('просмотрено довольно мало фильмов');
   } else
   if (10 < personalMovieDB.count && personalMovieDB.count < 30) {
      console.log('Вы класный зритель');
   } else
   if (personalMovieDB.count >= 30) {
      console.log('вы киноман');
   } else {
      console.log('произошла ошибка');
   }
}
// detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}
// showMyDB(personalMovieDB.private);


function writeYouGenres() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`, '');
   }
}
writeYouGenres();
console.log(personalMovieDB);