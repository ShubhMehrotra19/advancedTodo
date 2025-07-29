import { Sun, Moon } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300 h-14 sm:h-16">
      <div className="w-full px-3 sm:px-4 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white tracking-wide transition-colors duration-300">
              PlanIt
            </h1>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110 
                bg-gray-100 hover:bg-gray-200 text-gray-600
                dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100
                border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300" />
              )}
            </button>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Profile"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover cursor-pointer 
                  transition-all duration-300 ease-in-out
                  hover:scale-110 hover:shadow-lg hover:ring-4 hover:ring-blue-200 dark:hover:ring-blue-800
                  transform"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 
                hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;