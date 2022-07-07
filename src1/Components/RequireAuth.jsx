import React from "react";
import { useSelector } from "react-redux";
import {Navigate,useLocation} from "react-router-dom";

const RequireAuth =({children})=>{
const isAuth=useSelector(state=>state.AuthReducer.data.isAuth);
const location=useLocation()
     if(!isAuth){
console.log(isAuth,"sa")
        return <Navigate to="/login"  state={{ from: location }} replace />
     }
    return children;
}

export default RequireAuth;

 