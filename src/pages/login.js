import React, { useState } from 'react';
import Register from '../components/register';
import LoginForm from '../components/login';

const Login = () => {
  const [isRegister, setIsRegister] = useState(true);

  const toggleForm = () => {
    setIsRegister(prevIsRegister => !prevIsRegister);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{isRegister ? 'Register' : 'Login'}</h1>
          <button 
            onClick={toggleForm} 
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {isRegister ? 'Switch to Login' : 'Switch to Register'}
          </button>
        </div>
        {isRegister ? <Register /> : <LoginForm />}
      </div>
    </div>
  );
};

export default Login;
