import React, { useState } from 'react';

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin@.com' && password === 'admin123') {
      onLogin('admin');
    } else {
      alert('Invalid admin credentials!');
    }
  };

  return (
    <div className='p-4'>
      <h2 className='  text-white mt-10'>Admin Login</h2>
      <div className=' w-96 flex flex-col gap-5'>
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
