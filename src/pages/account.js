// Account.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Account = () => {
  const location = useLocation();
  const user = location.state ? location.state.user : null;

  if (!user) {
    return <div>No user data found!</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Account Details</h2>
      <div>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Hobbies:</strong> {user.hobbies.join(', ')}</p>
        <p><strong>Occupation:</strong> {user.occupation}</p>
      </div>
    </div>
  );
};

export default Account;
