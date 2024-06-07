// Register.js
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    hobbies: [],
    occupation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => {
      const hobbies = prevState.hobbies.includes(value)
        ? prevState.hobbies.filter(hobby => hobby !== value)
        : [...prevState.hobbies, value];
      return { ...prevState, [name]: hobbies };
    });
  };

  const handleRegister = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Invalid email address!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === formData.username);

    if (userExists) {
      alert("Username already taken!");
    } else {
      users.push({
        name: formData.name,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        gender: formData.gender,
        hobbies: formData.hobbies,
        occupation: formData.occupation
      });
      localStorage.setItem('users', JSON.stringify(users));
      alert("Registration successful!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-bold text-gray-700" htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div>
          <label className="block mb-1 font-bold text-gray-700" htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div>
          <label className="block mb-1 font-bold text-gray-700" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div>
          <label className="block mb-1 font-bold text-gray-700" htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div>
          <label className="block mb-1 font-bold text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div>
          <span className="block mb-1 font-bold text-gray-700">Gender</span>
          <label className="mr-4">
            <input type="radio" name="gender" value="Male" onChange={handleChange} className="mr-1" /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" onChange={handleChange} className="mr-1" /> Female
          </label>
        </div>
        <div>
          <span className="block mb-1 font-bold text-gray-700">Hobbies</span>
          <label className="mr-4">
            <input type="checkbox" name="hobbies" value="Reading" onChange={handleCheckboxChange} className="mr-1" /> Reading
          </label>
          <label className="mr-4">
            <input type="checkbox" name="hobbies" value="Traveling" onChange={handleCheckboxChange} className="mr-1" /> Traveling
          </label>
          <label>
            <input type="checkbox" name="hobbies" value="Cooking" onChange={handleCheckboxChange} className="mr-1" /> Cooking
          </label>
        </div>
        <div>
          <label className="block mb-1 font-bold text-gray-700" htmlFor="occupation">Occupation</label>
          <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
        </div>
    
        <button type="button" onClick={handleRegister} className="w-full bg-blue-500 text-white py-2 rounded-md">Register</button>
      </form>
    </div>
  );
};

export default Register;
