
// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === formData.username && user.password === formData.password);

    if (user) {
      alert("Login successful!");
      localStorage.setItem('loggedInUser', JSON.stringify(user)); // Store logged-in user
      navigate('/account');
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-bold text-gray-700" htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div>
          <label className="block mb-1 font-bold text-gray-700" htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
        </div>
        <button type="button" onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded-md">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
