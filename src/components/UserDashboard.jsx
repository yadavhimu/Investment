import React from 'react';
import Sidebar from './Sidebar'
import DashboardContent from './DashboardContent'
import FinanceChart from './FinanceCharts';



function UserDashboard({ email }) {
  const userCrypto = { email: email};

  return (
    <div className='dashboard-container mt-10'>
       <Sidebar/>
       <div className="main-content ">
        <div className="navbar">
        <p> Welcome, {userCrypto.email}  </p>
        </div>
       <DashboardContent/>
       <FinanceChart/>
      </div>
    </div>
  );
}

export default UserDashboard;
