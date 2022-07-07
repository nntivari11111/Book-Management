import React from "react";
import {Route,Routes} from "react-router-dom";
import Books from "./Books";
import SingleBook from "./SingleBook"; 
import EditBook from "./EditBook";
import RequireAuth from "../Components/RequireAuth";
import Login from "./Login";
const MainRoutes =() =>{

    return (
        <Routes>
       <Route  path="/" element={<Books/>}/>
       <Route  path="/books/:id" element={<SingleBook/>}/>
       <Route  path="/books/:id/edit" element={<RequireAuth> <EditBook/> </RequireAuth>}/>
       <Route  path="/login"element={<Login/>}/>
       <Route  path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    );
}
export default MainRoutes;