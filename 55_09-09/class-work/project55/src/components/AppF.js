import '../css/App.css';
import BookList from './BookList';
import Title from './Title';
import {getBooks} from '../store/store';
import React, {useState} from 'react';

export const MyCnt=React.createContext();

const AppF =()=>{
  
    const [books, setBooks]=useState(getBooks());

    const changeCounter=(id, isInc)=>{
        const newBooks=[...books];
        const index=newBooks.findIndex(book=>book.id===id);
        if(index>=0){
            const book={...newBooks[index]};     
            if(isInc){
                
                book.quantity++;
            }else if(newBooks[index].quantity>0){
                book.quantity--;
            }    
        newBooks[index]=book;
        setBooks(newBooks)
        }
    }
    
    const onIncClickHandler=(id)=>{
        changeCounter(id, true)
    }

    const onDecClickHandler=(id)=>{
        changeCounter(id, false)
    }

    const orderHandler=()=>{
        const orderBooks=books.filter(book=> book.quantity>0);
        let orderMessage="You order: "
        orderBooks.forEach(b =>orderMessage+= `${b.title}, `);
        orderMessage+= `sum of your order: ${orderBooks.reduce((sum, b)=>sum+=b.quantity*b.price, 0)}`
        console.log(orderMessage)
    }

    return (
    <div className="App">
        <Title title ='Bestsellers' />
    <MyCnt.Provider value={{
        onDecClickHandler: onDecClickHandler,
        onIncClickHandler: onIncClickHandler
    }}>   
        <BookList books = {books}/>
    </MyCnt.Provider>                     
        <button style={{marginTop:"20px"}} onClick={orderHandler}>order</button>        
    </div>
    )
} 

export default AppF

/* export const books=getBooks()

function App() {
  return (
    <div className="App">
      <Title title ='Bestsellers' />
      <BookList books = {books} />        
    </div>
  );
} */