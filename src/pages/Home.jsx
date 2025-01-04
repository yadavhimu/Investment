import React from 'react'
import Navbar from '../components/Navbar'
import FirstPage from '../components/FirstPage'

import Dashboard from '../components/Dashboard'
import CryptoCalculator from '../components/CryptoCalculator'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <FirstPage/>
      <CryptoCalculator/>
      <Dashboard/>
    </div>
  )
}

export default Home
