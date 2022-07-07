import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { getTodos } from "../Redux/action";
import { addTodosFailure, addTodosRequest, addTodosSuccess } from "../Redux/action";
import axios from "axios";


const TodoInput = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState("")

    const handleAdd = () => {
        const payload = {
            title,
            status: false,
        };
        setTitle("");
        dispatch(addTodosRequest());
        axios
        .post("http://localhost:8080/todos", payload)
        .then((res) => dispatch(addTodosSuccess()))
        .then(() => dispatch(getTodos()))
        .catch((err) => dispatch(addTodosFailure(err)))
    };


    return (
        <div>
            <input value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};
export default TodoInput;