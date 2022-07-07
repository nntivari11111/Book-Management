import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getTodos } from "../Redux/action";
import TodoInput from "./TodoInput";

const Todos = () => {

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
  

    useEffect(() => {
        if(todos?.length === 0) {
            dispatch(getTodos());
        }   
    }, [dispatch,todos?.length]);
    console.log(todos);

    return (
        <div>
            <h1>Todos</h1>
            <TodoInput  getTodos={getTodos} />
            {todos?.map((item) => {
                return <div key={item.id}>{item.title}</div>    
            })}
        </div>
    );
};
export default Todos;