import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CardHolder from './components/task-window/CardHolder';

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
      <main className="relative pt-16 bg-stone-50/60 dark:bg-gray-950 min-h-screen transition-colors ease-in-out duration-300 flex items-start justify-center">
        <p className='select-none fixed text-[130px] font-bold text-stone-300/40 dark:text-gray-800/40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors ease-in-out duration-300'>PlanIt</p>
        
        {/*  this section will be holding the main content of the app */}
        <section className='fixed w-full flex justify-evenly items-start px-5 mt-8'>
          <CardHolder color={`#EAB308`} progressBar={"To Do"} />
          <CardHolder color={"#3B82F6"} progressBar={"In Progress"} />
          <CardHolder color={`#22C55E`} progressBar={"Completed"} />
        </section>
      </main>
    </>
  );
};

export default App;