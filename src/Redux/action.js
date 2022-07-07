import * as types from "./actionTypes";
import axios from "axios";

const getTodosRequest = () => {
    return{
        type: types.GET_TODOS_REQUEST,
    };
};

const getTodosSuccess = (payload) => {
    return{
        type: types.GET_TODOS_SUCCESS,
        payload,
    };
};

const getTodosFailure = () => {
    return{
        type: types.GET_TODOS_FAILURE,
    };
};


const getTodos = payload => (dispatch) => {
    dispatch(getTodosRequest())
    axios
    .get("http://localhost:8080/todos")
    .then((res) => dispatch(getTodosSuccess(res.data)))
    .catch((err) => dispatch(getTodosFailure(err)));
};




const addTodosRequest = () => {
    return{
        type: types.ADD_TODOS_REQUEST,
    };
};

const addTodosSuccess = (payload) => {
    return{
        type: types.ADD_TODOS_SUCCESS,
        payload,
    };
};

const addTodosFailure = () => {
    return{
        type: types.ADD_TODOS_FAILURE,
    };
};

export {getTodosRequest,
     getTodosSuccess,
      getTodosFailure,
      getTodos,
       addTodosRequest,
        addTodosSuccess, 
        addTodosFailure}