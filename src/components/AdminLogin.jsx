import React, { useState } from 'react';

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin@1.com' && password === 'admin123') {
      onLogin('admin');
    } else {
      alert('Invalid admin credentials!');
    }
  };

  return (
    <div className='p-4 flex justify-center '>
      <div className=' lg:w-96 w-full flex flex-col justify-center gap-5'>
      <h2 className='flex justify-center text-3xl  text-white mt-10'>Admin Login</h2>
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='bg-white' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default AdminLogin;
