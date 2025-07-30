import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import CardHolder from '../task-window/CardHolder';


const Dashboard = () => {
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
      <main className="relative pt-14 sm:pt-16 bg-stone-50/60 dark:bg-gray-950 min-h-screen transition-colors ease-in-out duration-300 flex items-start justify-center">
        <p className='z-0 select-none fixed text-[60px] sm:text-[80px] md:text-[100px] lg:text-[130px] font-bold text-stone-300/40 dark:text-gray-800/40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors ease-in-out duration-300 pointer-events-none'>
          PlanIt
        </p>
        
        <section className='z-10 w-full max-w-7xl mx-auto px-3 sm:px-5 mt-4 sm:mt-6 lg:mt-8'>
          <div className='flex flex-col justify-center items-center gap-4 sm:gap-6 md:hidden'>
            <CardHolder color={`#EAB308`} progressBar={"To Do"} todo={"todo"} />
            <CardHolder color={"#3B82F6"} progressBar={"In Progress"} todo={"todo"} />
            <CardHolder color={`#22C55E`} progressBar={"Completed"} todo={"!todo"} />
          </div>
          
          <div className='hidden md:flex lg:hidden flex-wrap justify-center gap-6'>
            <div className='flex gap-6 w-full justify-center'>
              <CardHolder color={`#EAB308`} progressBar={"To Do"} todo={"todo"} />
              <CardHolder color={"#3B82F6"} progressBar={"In Progress"} todo={"todo"} />
            </div>
            <div className='flex justify-center w-full'>
              <CardHolder color={`#22C55E`} progressBar={"Completed"} todo={"!todo"} />
            </div>
          </div>
          
          <div className='hidden lg:flex justify-center gap-6 xl:gap-8'>
            <CardHolder color={`#EAB308`} progressBar={"To Do"} todo={"todo"} />
            <CardHolder color={"#3B82F6"} progressBar={"In Progress"} todo={"todo"} />
            <CardHolder color={`#22C55E`} progressBar={"Completed"} todo={"!todo"} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;