import useLocalStorage from '../hooks/useLocalStorage.ts';

const CustomToggleTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen  ${
        theme === 'light'
          ? 'bg-green-100 text-gray-700'
          : 'bg-black text-green-100'
      }`}
    >
      <h1>{theme}</h1>
      <button
        className='border border-orange-400 rounded-md px-4 py-1 hover:bg-orange-400 active:bg-orange-500 shadow-md'
        onClick={toggleTheme}
      >
        Toggle
      </button>
    </div>
  );
};

export default CustomToggleTheme;
