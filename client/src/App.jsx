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
      <main className="relative pt-16 bg-gray-100 dark:bg-gray-950 min-h-screen transition-colors ease-in-out duration-300 flex items-center justify-center">
        <p className='select-none fixed text-[130px] font-bold text-stone-400/40 dark:text-gray-800/40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors ease-in-out duration-300'>TODO</p>
      </main>
    </>
  );
};

export default App;