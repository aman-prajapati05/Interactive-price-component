import { useState,useEffect } from 'react'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
     <div className={isDarkMode ? 'dark h-screen ' : 'light  '}>
      <Hero isDarkMode={isDarkMode} />
      <div className='absolute top-60 flex justify-center w-screen'>
        <Card />
      </div>
      <div className="checkbox-wrapper-5 absolute top-2  right-1">
        <div className="check  ">
          <input className=' w-10 h-10'  id="check-5" type="checkbox" onChange={toggleTheme}/>
          <label for="check-5"></label>
        </div>
      </div>
    </div> 
      
    </>
  )
}

export default App
