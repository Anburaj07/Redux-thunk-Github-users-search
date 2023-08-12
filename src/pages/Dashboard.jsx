import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { failureAction } from '../Redux/action';

const Dashboard = () => {
  const [users,setUsers]=useState([]);
  const[search,setSearch]=useState('');
  const dispatch=useDispatch()

  const handleSearch=(search)=>{
    axios.get(`https://api.github.com/search/users?q=${search}&page=1&per_page=5`)
    .then((res)=>{
      console.log(res.data,'res.data')
      setUsers(res.data.items)
    }).catch((err)=>{
      dispatch(failureAction(err.message))
    })
  }
  return (
    <div>
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={()=>handleSearch(search)}>Search</button>
      {users.map((el)=>(
        <div key={el.id}>
          <h3>{el.login}</h3>
        </div>
      ))}
    </div>
  )
}

export default Dashboard
