import React from "react";
import {Route, Routes} from "react-router-dom"
import Todos from "../components/Todos";
import SingleTodo from "./SingleTodo";
const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element= {<Todos/>}/>
                <Route path="/:id" element= {<SingleTodo/>} />
            </Routes>
        </div>
    );
};
export default MainRoutes;