import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from '../pages/Registration'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default AllRoutes
