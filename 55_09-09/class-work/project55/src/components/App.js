import '../css/App.css';
import React from 'react';
import BookList from './BookList';
import Title from './Title';
import {getBooks} from '../store/store';
import BookFullInfo from './BookFullInfo';

export const MyContext=React.createContext();

export default class App extends React.Component{
  state={
    books: getBooks(),
    currentBook:null,
  }

  onIncClickHandler=(id)=>{
    const newBooks=[...this.state.books];
    const index=newBooks.findIndex(book=>book.id===id);
    if(index>=0 && newBooks[index].quantity<10){
      const book={...newBooks[index]};
      book.quantity++;
      newBooks[index]=book;
      this.setState({...this.state, books: newBooks})
    }
  }

  onDecClickHandler=(id)=>{
    const newBooks=[...this.state.books];
    const index=newBooks.findIndex(book=>book.id===id);
    if(index>=0 && newBooks[index].quantity>0){
      const book={...newBooks[index]};
      book.quantity--;
      newBooks[index]=book;
      this.setState({...this.state, books: newBooks})
    }
  }

  orderHandler=()=>{
    const orderBooks=this.state.books.filter(book=> book.quantity>0);
    let orderMessage="You order: "
    orderBooks.forEach(b =>orderMessage+= `${b.title}, `);
    orderMessage+= `sum of your order: ${orderBooks.reduce((sum, b)=>sum+=b.quantity*b.price, 0)}`
    console.log(orderMessage)
  }

  imgClickHandler=(id)=>{
    const index=this.state.books.findIndex(book =>book.id===id);
    const newCurrent={...this.state.books[index]}
    this.setState({...this.state, currentBook: newCurrent})
  }

  closeClickHandler=()=>{
    this.setState({...this.state, currentBook: null})
  }


  render(){
    console.log(this.state.books)
    return (
      <div className="App">
        <Title title ='Bestsellers' />
        <MyContext.Provider value={{
          //book_1_title: this.state.books[0].title,
          //books:this.state.books,
          onDecClickHandler: this.onDecClickHandler,
          onIncClickHandler: this.onIncClickHandler, 
          imgClickHandler: this.imgClickHandler
        }}>{
          this.state.currentBook ? 
          <BookFullInfo book={this.state.currentBook}
                        closeClickHandler={this.closeClickHandler}/>
          :
          <BookList books = {this.state.books}/>
        }
        <>
        <button style={{marginTop:"20px"}} onClick={this.orderHandler}>order</button>
        </>
        </MyContext.Provider>
        
                
      </div>
    )
  }
} 

/* export const books=getBooks()

function App() {
  return (
    <div className="App">
      <Title title ='Bestsellers' />
      <BookList books = {books} />        
    </div>
  );
} */


