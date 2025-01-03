import React from 'react';

function AdminDashboard() {
  const userData = [
    { email: 'user1', crypto: 'Bitcoin', amount: 100 },
    { email: 'user2', crypto: 'Ethereum', amount: 500 },
  ];

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Email</th>
            <th>Cryptocurrency</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.email}</td>
              <td>{user.crypto}</td>
              <td>{user.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;

