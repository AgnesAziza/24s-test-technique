import './App.css';
import './components/theme.css'
import Error from './components/Error';
import Footer from './components/Footer';
import Home from './components/Home';
import Apropos from './components/Apropos';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
      <Header toggleTheme={toggleTheme}/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/a-propos" element={<Apropos/>} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
