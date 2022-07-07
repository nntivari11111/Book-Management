import React, { useEffect } from "react";
import BookCard from "./BookCard";
import styled from "styled-components";
import {getBooks} from "../Redux/AppReducer/action"
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams,Link} from "react-router-dom";

const BooksLists=()=>{
  const books=useSelector((state)=>state.AppReducer.books);
  const dispatch=useDispatch();
  const [searchParams]=useSearchParams();
  const location =useLocation();
  useEffect(()=>{
    if(books.length===0 || location.search){
      const sortBy=searchParams.get("sortBy");
      let getTodoParams={
        params:{
          category:searchParams.getAll("category"),
          _sort:sortBy && "release_year",
          _order:sortBy,
        },
      };
      dispatch(getBooks(getTodoParams));
    }
  },[books.length,dispatch,location.search,searchParams])
console.log(books)
    
      return  <>
        {
            books.length>0 && books.map((singleBook)=>{  
                return( 
                <BookCardWrapper key={singleBook.id}>
                  <Link to={`/books/${singleBook.id}`}>
                <BookCard bookData={singleBook}{...books}/>
                </Link>
                </BookCardWrapper>
                );
              })
        }
        </>;
    

}
export default BooksLists;

const BookCardWrapper =styled.div`
 border:1px solid blue;
 padding:5px;
 width:310px;

`;






























































































































































































































































