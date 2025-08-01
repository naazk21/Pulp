import React, { useState } from 'react';

const Login_Signup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button onClick={toggleForm} className="ml-1 text-purple-600 underline">
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login_Signup;
