import React, { useState } from 'react';
import { User, Moon, Sun } from 'lucide-react';
import Login from './Login';
import Register from './Register';

const Auth = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const themeClasses = isDarkMode
    ? 'bg-gray-900 text-white'
    : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800';

  const cardClasses = isDarkMode
    ? 'bg-gray-800 border-gray-700 shadow-2xl shadow-blue-500/10'
    : 'bg-white/80 backdrop-blur-sm border-gray-200 shadow-2xl shadow-blue-500/20';

  const inputClasses = isDarkMode
    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20'
    : 'bg-white/70 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20';

  const buttonClasses = isDarkMode
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25'
    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/30';

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-all duration-500 ${themeClasses}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-6 right-6 p-3 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' : 'bg-white/80 hover:bg-white text-gray-600 shadow-lg'}`}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      {/* Card */}
      <div className={`w-full max-w-md p-8 rounded-2xl border transition-all duration-500 ${cardClasses}`}>
        <div className="text-center mb-8">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-blue-600/20' : 'bg-blue-100'}`}>
            <User className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          <h2 className="text-3xl font-bold mb-2">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {isSignUp ? 'Sign up to get started' : 'Sign in to your account'}
          </p>
        </div>
        {/* Login/Register Form */}
        {isSignUp ? (
          <Register
            isDarkMode={isDarkMode}
            inputClasses={inputClasses}
            buttonClasses={buttonClasses}
            onLogin={onLogin}
            setError={setError}
            setIsLoading={setIsLoading}
            error={error}
            isLoading={isLoading}
          />
        ) : (
          <Login
            isDarkMode={isDarkMode}
            inputClasses={inputClasses}
            buttonClasses={buttonClasses}
            onLogin={onLogin}
            setError={setError}
            setIsLoading={setIsLoading}
            error={error}
            isLoading={isLoading}
          />
        )}
        {/* Toggle Mode */}
        <div className="mt-6 text-center">
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              onClick={() => {
                setIsSignUp((s) => !s);
                setError('');
              }}
              disabled={isLoading}
              className={`ml-2 font-semibold transition-colors duration-200 disabled:opacity-50 ${
                isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
