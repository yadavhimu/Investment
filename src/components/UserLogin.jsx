import React, { useState } from 'react';

function UserLogin({ onLogin }) {
  const [email, setEmail] = useState('');
//   const [invest, setInvest] = useState("");

  const handleLogin = () => {
    if (email) {
      onLogin('user', email);
    } else {
      alert('Please enter your email!');
    }
  };

  return (
    <div className='mt-10 p-4 flex justify-center'>
      
      <div className='flex flex-col lg:w-96 w-full gap-5'>
      <h2 className=' flex justify-center text-3xl text-white '>User Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
       {/* <input
        type="number"
        placeholder="Investment Amount"
        value={email}
        onChange={(e) => setInvest(e.target.value)}
      /> */}
      <button className='bg-white mb-5' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default UserLogin;

