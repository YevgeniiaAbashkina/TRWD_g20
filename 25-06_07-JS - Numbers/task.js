const numberOfFilms = +prompt("How many films did you  watch last month?");

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},//name of film- key {"Titanic":8.8, "Hatiko":9.4}
    genres:[],//like 3
    private: false//print , true - message don't agree
}

