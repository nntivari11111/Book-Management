import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams ,Link} from "react-router-dom";
import { getBooks } from "../Redux/AppReducer/action";

const SingleBook =()=>{
const {id}=useParams();
const dispatch=useDispatch();

const books=useSelector(state=>state.AppReducer.books);
const [currentBook,setCurrentBook]=useState({})

useEffect(()=>{
if(books?.length===0){
    dispatch(getBooks())
}
},[books.length,dispatch])
useEffect(()=>{
   if(id){
    const temp=books?.find((book)=>book.id===Number(id));
    temp && setCurrentBook(temp);
   }
},[books,id])
console.log(currentBook)
return <div style={{margin:"auto" ,border:"2px solid yellow",width:"50%" ,textAlign:"center"}}>
    <h2>{currentBook?.book_name}</h2>
    <div>{currentBook?.category}</div>
    <div>{currentBook?.release_year}</div>
    <button>
   <Link to={`/books/${currentBook.id}/edit`}>Edit</Link>
    </button>
</div>;


}
export default SingleBook;