import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

const Login = ({
  isDarkMode,
  inputClasses,
  buttonClasses,
  onLogin,
  setError,
  setIsLoading,
  error,
  isLoading,
}) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      // Debug: log response shape
      console.log('Login response:', data);

      if (res.ok && data.user && data.token) {
        onLogin({ ...data.user, token: data.token });
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      } else {
        setError(data.message || 'Login failed');
      }
    } catch {
      setError('Network error. Please check if the server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
      {error && (
        <div className="mb-6 p-3 bg-red-100 border border-red-300 rounded-lg">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}
      <div className="space-y-2">
        <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Email Address
        </label>
        <div className="relative">
          <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
            className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-all duration-200 ${inputClasses}`}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Password
        </label>
        <div className="relative">
          <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
            className={`w-full pl-12 pr-12 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-all duration-200 ${inputClasses}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 px-4 rounded-xl text-white font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${buttonClasses}`}
      >
        {isLoading ? 'Signing In...' : 'Sign In'}
      </button>
    </form>
  );
};

export default Login;
