//Task01
//Все методы, кроме start() в personalMovieDB сделать методами объекта


let numberOfFilms;
start();

console.log(numberOfFilms);

const personalMovieDB = {
    count:numberOfFilms,
    movies: {
        toString: function () {
            let movieList = "";
            for (let key in this) {
                if(typeof this[key] !='function')
                movieList += `'${key}': ${this[key]}\n`
            }
            return movieList; 
        }
    },
    genres:[],
    private: false,
    getMovieData: function (filmsNumber) {
        for (let i = 0; i < filmsNumber; i++){
            const title = prompt("Enter the title of last watched movie");
            const rate = parseFloat(prompt("How do you rate it?"));
            console.log(rate);
            if (title != null && title != "" && rate != null && rate != "" && !isNaN(rate)) {
                this.movies[title] = rate;
            } else {
                alert("You must write correct data.");
                i--;
            }    
        }
    },
    getGenre: function (genresNumber) {
        for (let i = 1; i < genresNumber; i++){
            this.genres[i - 1] = prompt(`What is your top-${i} genre?`);
        }
    },
    showMovieDB: function () {
        if (!this.private) {
            //console.log(personalMovieDB);
            alert(`You did watched: ${this.count} films`);
            alert('You saved film:\n' + this.movies);
            alert(`You favorite genre: ${this.genres}`);
            alert(this.levelScoreMessage());
        }
    },
    levelScoreMessage: function () {
        if (this.count < 5) {
            return "don't  like movies?";
        } else if (this.count >= 5 && this.count <= 15) {
            return "You are classic viewer\u{1F60D}";//unicod
        } else if(this.count>15 && this.count<=30){
            return "you're a movie buff!";
        } else {
            return "Error!";
        }
    }
}

personalMovieDB.getMovieData(2);
personalMovieDB.getGenre(1);
personalMovieDB.showMovieDB();

console.log("" + personalMovieDB.movies);

function start() {
    do {
        numberOfFilms = +prompt('How many films did you watch last month?');
    } while (isNaN(numberOfFilms));
}



//Task02
/* написать функцию, которая укорачивает строку (если слово длиннее, чем maxLength - обрезать до maxLength и добавит ... ,  если короче - вернуть изначальную строку)
function stringCat(str, maxLength);

stringCat('hello world!', 5) -> 'hello...'
stringCat('hello', 5) -> 'hello'
*/
 
function stringCat(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    } 
    return str;
}

function catString(str, maxLength) {
    return (str.length > maxLength) ? str.slice(0, maxLength) + "..." : str;
}


//Task03
/* 
игра русско-английский словарь;
двухмерный массив с парами слов (всего пять пар)
спрашивать пользователя перевод английского слова из массива, если ответ правильный - выводить "Отлично!", если нет - правильный перевод слова
 */

const words = [             //words[1][0]->bike (eng index = 0; ru index = 1)
    ['food', 'еда'],
    ['bike', 'велосипед'],
    ['apple', 'яблоко'],
    ['do', 'делать'],
    ['mean', 'еиметь в виду'],
];

checkUserTranslation();

function checkUserTranslation() {
    for (let i = 0; i < words.length; i++){
        const UserTranslation = getUserTranslation(i);
        if (UserTranslation === words[i][1]) alert('Correct!');
        else alert(`wrong, correct answer is ${words[i][1]}`)
    }

}

function getUserTranslation(index) {
    return prompt(`how do you translate the word ${words[index][0]}?`)
}