import { FAILURE, LOGIN_SUCCESS, REGISTER_SUCCESS, REQUEST } from "./actionTypes"

const initState={
    isLoading:false,
    email:'',
    password:'',
    isError:false,
    errorMessage:''
}

export const authReducer=(state=initState,{type,payload})=>{
    switch(type){
        case REQUEST:{
            return{...state,isLoading:true}
        }
        case REGISTER_SUCCESS:{
            return{...state,email:payload.email,password:payload.password,isLoading:false,isError:false}
        }
        case FAILURE:{
            return{...state,isLoading:false,isError:true,errorMessage:payload}
        }
        case LOGIN_SUCCESS:{
            return{...state,email:payload.email,password:payload.password,isLoading:false,isError:false}
        }
        default:
            return state
    }
}