import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {register} from '../Redux/action';

const Registration = () => {
  const e=useSelector((store)=>{
    console.log(store)
    return store.email
  });
  const isError=useSelector((store)=>store.isError);
  const errorMessage=useSelector((store)=>store.errorMessage);
  const[email,setEmail]=useState('eve.holt@reqres.in');
  const[password,setPassword]=useState('pistol')

  const dispatch=useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault()
    let obj={
      email,
      password
    }
    dispatch(register(obj))
  }

  return (
    <div>
      <h1>Registration Here</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter e-mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="submit" />
      </form>
      <p>{e.length >0 && "Registraion Successfull !"}</p>
      {isError && <p>{errorMessage}</p>}
    </div>
  )
}

export default Registration
