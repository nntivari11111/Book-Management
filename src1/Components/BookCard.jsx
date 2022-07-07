import React from "react";

const BookCard=({bookData}) =>{

    return (
       <div>
        <div>
            <img src="https://media.istockphoto.com/photos/stack-of-books-picture-id157482029?k=20&m=157482029&s=612x612&w=0&h=b_0K-1Ut9alhKYu9zlgevSAHDkqSxLF634VDwPw8CHU="  width="100%"alt="" />
            <div>{bookData.book_name}</div>
            <div>{bookData.release_year}</div>
            <div>{bookData.category}</div>
        </div>
       </div>

    )
}
export default BookCard;