import React from "react";
//import {useDispatch, useSelector} from "react-redux";
//import { getBooks } from "../Redux/action";
import BooksLists from "../Components/BookLists";
import FilterSort from "../Components/FilterSort";
import styled from "styled-components";
//import { useSearchParams } from "react-router-dom";
const Books =()=>{
   
    return <div>
        <h2>Books</h2>
        <BookPageWrapper> 
          <FilterSortWrapper>  
        <FilterSort/>
        </FilterSortWrapper>
        <BookListWrapper>
        <BooksLists/>
        </BookListWrapper>
        </BookPageWrapper>
        </div>;
}

export default Books;

const BookPageWrapper =styled.div`
display:flex;
`;
const FilterSortWrapper=styled.div`
width :30%;
border :1px solid red;
`;

const BookListWrapper =styled.div`
border: 1px solid black;
width: 100%;
grid-temlate-columns:repeat(auto-fit,minmax(310px));
grid-gap:16px;
justify-content:center;
padding:initial;
`