"use strict";

// alert("dfwfe")
// prompt('dsdsd', '')
// confirm('css')

// const answer = [];
// answer[0] = prompt('name', '');
// answer[1] = prompt('lastname', '');
// answer[2] = +prompt('age', '');
// delete answer[2];
// console.log(answer)

// const category = 'toys';

// console.log(`http://rename/${category}`)

// alert(`Good moning, ${category}`);

const numberOfFilms = +prompt("сколько фильмов вы уже посмотрели", '');

const personalMovieDB = {
   count: numberOfFilms,
   movie: {},
   actors: {},
   genres: [],
   private: false

};

// personalMovieDB.count = numberOfFilms;
// personalMovieDB.movies = [];
// personalMovieDB.actors = [];
// personalMovieDB.genres = {};
// personalMovieDB.private = false;

// console.log(personalMovieDB);

const questions1 = prompt('Один из послдених просмотренных фильмов', ''),
   questions2 = prompt('На сколько оцените его', ''),
   questions3 = prompt('Один из послдених просмотренных фильмов', ''),
   questions4 = prompt('На сколько оцените его', '');

personalMovieDB.movie[questions1] = questions2;
personalMovieDB.movie[questions3] = questions4;

console.log(personalMovieDB);