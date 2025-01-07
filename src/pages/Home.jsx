import React from 'react'
import Navbar from '../components/Navbar'
import FirstPage from '../components/FirstPage'

import Dashboard from '../components/Dashboard'
import CryptoCalculator from '../components/CryptoCalculator'
// import InvestDashboard from '../components/InvestDashboard'
// import UserLogin from '../components/UserLogin'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <FirstPage/>
      <CryptoCalculator/>
      <Dashboard/>
      {/* <InvestDashboard/> */}
    </div>
  )
}

export default Home
