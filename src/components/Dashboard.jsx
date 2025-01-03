import React, { useState } from 'react';
import AdminLogin from './AdminLogin';
import UserLogin from './UserLogin';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

function Dashboard() {
  const [role, setRole] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const handleLogin = (role, email = null) => {
    setRole(role);
    setUserEmail(email);
  };

  if (role === 'admin') return <AdminDashboard />;
  if (role === 'user') return <UserDashboard email={userEmail} />;

  return (
    <div className='bg-[#172554]'>
      <h1 className='flex justify-center text-white text-3xl mt-5'>Login For User And Admin </h1>
      <AdminLogin onLogin={handleLogin} />
      <UserLogin onLogin={handleLogin} />
    </div>
  );
}

export default Dashboard;

