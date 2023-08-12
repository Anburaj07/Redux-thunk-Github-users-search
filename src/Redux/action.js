//Register

import axios from "axios"
import { FAILURE, LOGIN_SUCCESS, REGISTER_SUCCESS, REQUEST } from "./actionTypes"

export const requestAction=()=>{
    return{type:REQUEST}
}

export const failureAction=(payload)=>{
    return{type:FAILURE,payload}
}

export const registerSuccessAction=(payload)=>{
    return{type:REGISTER_SUCCESS,payload}
}

export const loginSuccessAction=(payload)=>{
    return{type:LOGIN_SUCCESS,payload}
}

export  const register=(obj)=>(dispatch)=>{
    dispatch(requestAction())
    axios.post(`https://reqres.in/api/register`,obj)
    .then((res)=>{
      dispatch(registerSuccessAction(obj))
    })
    .catch((err)=>{
      dispatch(failureAction(err.message))
    })
  }

  export  const login=(obj)=>(dispatch)=>{
    dispatch(requestAction())
    axios.post(`https://reqres.in/api/login`,obj)
    .then((res)=>{
      dispatch(registerSuccessAction(obj))
    })
    .catch((err)=>{
      dispatch(failureAction(err.message))
    })
  }