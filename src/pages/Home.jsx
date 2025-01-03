import React from 'react'
import Navbar from '../components/Navbar'
import FirstPage from '../components/FirstPage'
import Calculator from '../components/Calculator'
import Dashboard from '../components/Dashboard'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <FirstPage/>
      <Dashboard/>
      <Calculator/>
    </div>
  )
}

export default Home
