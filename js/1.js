"use strict";

/* jshint esversion: 6 */

// let value = prompt('Кто там?', '');
// if (value == 'Админ') {
//    password = prompt('Пароль', '');
//    if (password == 'Я главный') {
//         alert('Здравствуйте!');
//     } else if (password == '' || password == null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }
// } else if (value == '' || value == null) {
//     alert ('Отменено');
// } else {
//     alert ('Я вас не знаю');
// }


// -----------------------------------


// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );


// ---------------------------------


// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i)
//     }
// }


// ---------------------------------


// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0;

// while (i < 3) {
//     alert( `number ${i}!` );
//     i++
// }


// ---------------------------------


// let num;

// do {
//   num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);


// --------------------------------

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);

// const result = confirm('Are you here?');
// console.log(result);

// const answers = [];
// answers[0] = prompt('What is your name', '');
// answers[1] = prompt('How old are you', '');
// answers[2] = prompt('What is your lastname', '');
// console.log(typeof(answers));

// const user = 'ivan';
// alert(`hi, ${user}`)




// -------------------------------------------------



const numberOfFilms = +prompt('How many films have you already seen?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Last film', ''),
//       b = +prompt('Rate film', ''),
//       c = prompt('Last film', ''),
//       d = +prompt('Rate film', '');
      
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt('Last film', ''),
          b = +prompt('Rate film', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b; 
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);



// const num = 50;

// switch (num) {
//     case 49: 
//         console.log('False');
//         break;
//     case 100: 
//         console.log('False');
//         break;
//     case 50: 
//         console.log('True');
//         break;
//     default: 
//         console.log('sorry');
//         break;
// }

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }