import React from 'react';


function UserDashboard({ email }) {
  const userCrypto = { email: email, crypto: 'Bitcoin', amount: 0 };

  return (
    <div>
      <h2>User Detail</h2>
      <p>Welcome, {userCrypto.email}</p>
      <p>You have {userCrypto.amount} {userCrypto.crypto}.</p>
    </div>
  );
}

export default UserDashboard;
