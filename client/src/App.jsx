import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let shouldBeDark = false;
    if (savedTheme === 'dark') {
      shouldBeDark = true;
    } else if (savedTheme === 'light') {
      shouldBeDark = false;
    } else {
      shouldBeDark = prefersDark;
    }

    setIsDarkMode(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-16 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto p-4">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Welcome to your TODO app
          </h2>
          <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            This is the main content area. The navbar stays fixed at the top.
          </p>
        </div>
      </main>
    </>
  );
};

export default App;