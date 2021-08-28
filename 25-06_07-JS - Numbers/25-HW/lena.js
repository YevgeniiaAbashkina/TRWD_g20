/* 1. Реализовать заполнение объекта movies, в зависомости от количества просмотренных фильмов. (стрктура хранения данных: название фильма-ключ, рейтинг - значение)
    2. Спросить три любимых жанра и сохранить ответы в массив genres;
    3. Реализовать метдо, который дает или не дает распечатать полученные данные (проверка поля private)
    4. Оценить количество промотренных фильмов и вывести соотвествующее сообщение (
        от 0 - до 1;
        от 1 до 3;
        от 3 - 5;
        > 5
    )
 */

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

console.log(personalMovieDB.levelScoreMessage(personalMovieDB.count));//=numberofFilms

