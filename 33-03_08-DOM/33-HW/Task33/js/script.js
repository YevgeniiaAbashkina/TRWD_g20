/* Задания:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

/* const movieDB = {
    movies: [
        "On the Rocks",
        "The Trip to Greece",
        "Bad Education",
        "The Nest",
        "Nomadland"
    ]
}; */

//1) Удалить все рекламные блоки со страницы (правая часть сайта)
        
//const adv = document.querySelectorAll(".promo__adv img, .promo__adv-title");
//adv.forEach(item => item.remove())
const promo = document.querySelector('.promo .promo__adv').children
for (let el of promo) el.style.display = 'none'


const adv = document.querySelector(".promo__adv").children;
console.log(adv)

/*  for (let i = 0; i < adv.length; i++) {
     console.log(adv[i])
     adv[i].remove();
     i--; 
}  */
 for (let i = adv.length-1; i >=0; i--) {
     console.log(adv[i])
     adv[i].remove();
     
} 


//2) Изменить жанр фильма, поменять "комедия" на "драма"
const promoGenre = document.querySelector(".promo__bg .promo__genre");
 
promoGenre.textContent = "drama";

document.querySelector(".promo__bg").style.backgroundImage = "url(img/bg.jpg)"

//4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту 
const movieDB = {
    movies: [
        "On the Rocks",
        "The Trip to Greece",
        "Bad Education",
        "The Nest",
        "Nomadland"
    ]
};

movieDB.sort();
console.log(movieDB)
