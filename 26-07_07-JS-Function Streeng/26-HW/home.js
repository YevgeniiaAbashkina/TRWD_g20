//Task01
//Все методы, кроме start() в personalMovieDB сделать методами объекта

let numberOfFilms;
start();



const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    genres:[],
    private: false,
    getMovieData: function (filmsNumber) {
        for (let i = 0; i < filmsNumber; i++){
            const title = prompt("Enter the title of last watched movie");
            const rate = parseFloat(prompt("How do you rate it?"));
            console.log(rate);
            if (title != null && title != "" && rate != null && rate != "" && !isNaN(rate)) {
                personalMovieDB.movies[title] = rate;
            } else {
                alert("You must write correct data.");
                i--;
            }    
        }
    },
    getGenre: function (genresNumber) {
        for (let i = 1; i < genresNumber; i++){
            personalMovieDB.genres[i - 1] = prompt(`What is your top-${i} genre?`);
        }
    },
    showMovieDB: function (hidden) {
        if (!hidden) {
            //console.log(personalMovieDB);
            alert(`You did watched: ${personalMovieDB.count} films`);
            for (let key in personalMovieDB.movies) {
                alert(`You saved films: "${key}" has rate ${personalMovieDB.movies[key]}`);
            }
            alert(`You favorite genre: ${personalMovieDB.genres}`);
            alert(personalMovieDB.levelScoreMessage(personalMovieDB.count));
        }
    },
    levelScoreMessage: function (moviesCount) {
        if (moviesCount < 5) {
            return "don't  like movies?";
        } else if (moviesCount >= 5 && moviesCount <= 15) {
            return "You are classic viewer\u{1F60D}";//unicod
        } else if(moviesCount>15 && moviesCount<=30){
            return "you're a movie buff!";
        } else {
            return "Error!";
        }
    }
}

console.log("numberOfFilms :" + numberOfFilms);

function start() {
    do {
        numberOfFilms = +prompt('How many films did you watch last month?');
    } while (isNaN(numberOfFilms));
}

personalMovieDB.getMovieData(3);
personalMovieDB.getGenre(3);
personalMovieDB.showMovieDB(personalMovieDB.private);

console.log(personalMovieDB.levelScoreMessage(personalMovieDB.count));


//Task02
/* написать функцию, которая укорачивает строку (если слово длиннее, чем maxLength - обрезать до maxLength и добавит ... , если короче - вернуть изначальную строку)
 */

let str = "With you, forever won't be too long."
console.log(str.length);//37

function stringCat(str, maxLength) {
    if (str.length >= maxLength) {
        let str1 = (str.slice(0, maxLength)+"...");
        console.log(str1);
    } else {
        console.log(str);
    }
}

stringCat("With you, forever won't be too long.", 37);
console.log(stringCat) 
    
//Task03
/* 
    игра русско-английский словарь;
    двухмерный массив с парами слов (всего пять пар)
    спрашивать пользователя перевод английского слова из массива, если ответ правильный - выводить "Отлично!", если нет - правильный перевод слова
 */

const playArray = [['house', 'animal', 'mother', 'earth', 'sound'], ['дом', 'животное', 'мать', 'земля', 'звук']];
callDialogForUser(playArray);

function callDialogForUser(tempArray) {
    for (let englishWord of tempArray[0]) {
        console.log(englishWord);
        russianWordFromUser = prompt('Translate the word "' + englishWord + '" into Russian.');
        if (isTranslationCorrect(tempArray, englishWord, russianWordFromUser)) {
            alert("Perfect!");
        } else {
            alert("Wrong answer! Correct translation is \"" + translateEngToRus(tempArray, englishWord) + "\"");
        }
    }
}


function isTranslationCorrect(tempArray, englishWord, russianWord) {
    console.log("englishWord:" + englishWord + "russianWord:" + russianWord);
    //let russianWordFromVocabulary = translateEngToRus(tempArray, englishWord);
    for (let i = 0; i < tempArray[0].length; i++) {
        console.log("englishWord - " + englishWord + "| tempArray[0][i] - " + tempArray[0][i] +"| russianWord - "+ russianWord +"| tempArray[1][i] - " +tempArray[1][i]);
        
        if (englishWord == tempArray[0][i]) {
            if (russianWord == tempArray[1][i]) {
                console.log("TRUE!!");
                return true;
            }
        } 

    }
    return false;
}

function translateEngToRus(tempArray, englishWord) {
    console.log("User want to translate next word:" + englishWord);
    for (let i = 0; i < tempArray[0].length; i++) {
        if (tempArray[0][i] == englishWord) {
            console.log(englishWord + "==" + tempArray[1][i]);
            return tempArray[1][i];
        }        
    }
}
                    


