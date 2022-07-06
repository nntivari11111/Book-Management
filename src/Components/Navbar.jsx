import React from "react";
import { Link } from "react-router-dom";

const Navbar =()=>{
    return <div style={{display:"flex"}}>
        <Link to="/">Books</Link>
        <Link to="/books/:id">SingleBook</Link>
        <Link to="/login">Login</Link>
    </div>;
}
export default Navbar;