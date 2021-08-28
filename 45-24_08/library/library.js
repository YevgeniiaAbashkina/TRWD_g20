/* 1.Берем по очереди каждый элемент из массива
2.Создаем элемент для отображения данных на странице
3.присвоим элементу id
4.стилизуем элемент
5.отрисовать элемент в левой части */

 /* const library = [
    {
        id: 0,
        title: "Harry Potter",
        author: "Joahn Rowling",
        yearIssue: 1995,
        genre: "Adventure",
        iNumber: 234561,
        cover: "https://static.wikia.nocookie.net/harrypotter/images/d/da/Deathly_Hallows_New_Cover.jpg/revision/latest/top-crop/width/360/height/450?cb=20170109054859"
    },
    {
        id: 1,
        title: "Lord of the Rings",
        author: "J. R. R. Tolkien",
        yearIssue: 1999,
        genre: "Saga",
        iNumber: 789658,
        cover: "https://images-eu.ssl-images-amazon.com/images/I/51EstVXM1UL._SY264_BO1,204,203,200_QL40_ML2_.jpg"
    },
    {
        id: 2,
        title: "Emma",
        author: "Jane Austin",
        yearIssue: 1816,
        genre: "Saga",
        iNumber: 789658,
        cover: "https://images2.medimops.eu/product/970156/M00007350783-large.jpg"
    }
]; */

const myLibrary = new Library();
const book = new Book("Harry Potter",
    "Joahn Rowling",
    1995,
    "Adventure",
    234561,
    "https://static.wikia.nocookie.net/harrypotter/images/d/da/Deathly_Hallows_New_Cover.jpg/revision/latest/top-crop/width/360/height/450?cb=20170109054859");

myLibrary.addBook(book)

myLibrary.addBook(new Book("Lord of the Rings",
    "J. R. R. Tolkien",
    1999,
    "Saga",
    789658,
    "https://images-eu.ssl-images-amazon.com/images/I/51EstVXM1UL._SY264_BO1,204,203,200_QL40_ML2_.jpg"));

myLibrary.addBook(new Book("Emma",
    "Jane Austin",
    1816,
    "Saga",
    789658,
    "https://images2.medimops.eu/product/970156/M00007350783-large.jpg"));

console.log(myLibrary)

const left = document.querySelector("#left"),
    rigth = document.querySelector("#right");

//sortInfo:
/* library.forEach((element, index) => {
    const div = document.createElement("div");
    div.id = "book_" + element.id;
    div.className = "book";
    div.innerHTML = `<p>${index + 1}. <span style="font-size: 24px">${element.title}</span>, ${element.author}</p>`;
    left.append(div);
}); */

left.innerHTML = myLibrary.renderLibrary();


const books = left.querySelectorAll(".book");

books.forEach(book => book.onclick = clickHandler);

function clickHandler(event) {
    rigth.innerHTML = "";
    const id = +event.currentTarget.id.split("_")[1];
    const book = myLibrary.books.find(b => b.id === id);
    //myLibrary{books:[]}

    rigth.innerHTML = book.renderFullInfo();
}
//fullInfo:
/*
for (book of books) {
    book.onclick = (event) => {
        rigth.innerHTML = "";
        const id = +event.currentTarget.id.split("_")[1];
        const element = library.find((book) => book.id === id);
        const bookDetail = document.createElement("div");
        bookDetail.className = "bookDetail";
        bookDetail.innerHTML=`<img src=${element.cover} alt=${element.title}>
        <h2>${element.title}</h2>
        <h5>${element.author}</h5>
        <p>years of issue: ${element.yearIssue}, genre: ${element.genre}</p>`
        rigth.append(bookDetail)
    }
} */
