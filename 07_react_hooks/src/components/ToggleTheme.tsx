import { useState } from 'react';

const ToggleTheme = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const capTheme = theme.charAt(0).toUpperCase() + theme.slice(1);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen  ${
        theme === 'light'
          ? 'bg-green-100 text-gray-700'
          : 'bg-black text-green-100'
      }`}
    >
      <h1>{capTheme}</h1>
      <button
        className='border border-orange-400 rounded-md px-4 py-1 hover:bg-orange-400 active:bg-orange-500 shadow-md'
        onClick={toggleTheme}
      >
        Toggle
      </button>
    </div>
  );
};

export default ToggleTheme;
