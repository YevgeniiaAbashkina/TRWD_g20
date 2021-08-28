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

const numberOfFilms = +prompt('How many films did you watch last month?');
console.log("numberOfFilms :" + numberOfFilms);
personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    genres:[],
    private: false
}

personalMovieDB = setMoviesObject(personalMovieDB);
personalMovieDB = setArrayOfGenres(personalMovieDB);
console.log("isAllowedToPrint : " + isAllowedToPrint(personalMovieDB));
callDialogForUser(personalMovieDB);
console.log(personalMovieDB);

function setMoviesObject(personalMovieDB) {
        for (let i = 0; i < numberOfFilms; i++){
            let film = prompt("Enter the name of the movie, please.");
            let ratingOfFilm = +prompt("Enter the rating of this movie, please.");
            personalMovieDB.movies[film] = ratingOfFilm;
            console.log("USER added a film :" + film + "| ratingOfFilm : " + ratingOfFilm);
        }
    return personalMovieDB;
}

function setArrayOfGenres(personalMovieDB) {
    let tempGenres = prompt("Enter your three favorite genres comma(\",\") separated, please.").split(",");
    personalMovieDB.genres = tempGenres;
    return personalMovieDB;
}

function isAllowedToPrint(personalMovieDB) {
    if (personalMovieDB.private) {
        return true;
    } else {
        return false;
    }
}

function callDialogForUser(personalMovieDB) {
    let numberOfMovies = Object.keys(personalMovieDB.movies).length;
    if (numberOfMovies > 0 && numberOfMovies < 1) {
        alert("You watch too few films.");
    } else if (numberOfMovies > 1 && numberOfMovies < 3) {
        alert("You watch quite a few films.");
    } else if (numberOfMovies > 3 && numberOfMovies < 5) {
        alert("You are watching too many films.");
    } else {
        alert("Turn off your TV and take care of your real life!");
    }
}




 

//console.log(`${movies}${personalMovieDB[key][movies]}`)
//console.log("personalMovieDB[key] : " + personalMovieDB[key]);
                    //console.log("personalMovieDB[key][movies] : " + personalMovieDB[key][movies]);
                    //console.log("movies : " + movies);
                    //console.log("personalMovieDB.movies : " + personalMovieDB.movies);

                    //movies = film;
                    //personalMovieDB[key][movies] = ratingOfFilm;
                    //console.log("movies : " + movies);
                    //console.log("personalMovieDB[key][movies] : " + personalMovieDB[key][movies]);

                    //personalMovieDB[key][movies] = film;
                    //movies.film = ratingOfFilm;