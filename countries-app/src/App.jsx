import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from "./Pages/Home"
import CountryInfo from "./Pages/CountryInfo"
import { useState, useEffect } from "react"

const App = () => {

  const [countries, setCountries] = useState([])
  
    const [dark, setDark] = useState(() => {
      // Load initial theme from localStorage or system preference
      const stored = localStorage.getItem('theme');
      return stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    console.log(window.matchMedia);
    
  
    useEffect(() => {
      const root = document.documentElement;
      if (dark) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }, [dark]);
  

  useEffect(() => {
    fetch('/data.json')
    .then((response) => response.json())
    .then((data) => {
      setCountries(data)
    })
    .catch((e) => console.error(e)
    )
}, [])


  return (
    <>
    <BrowserRouter>
    <Header
    setDark={setDark}
    dark={dark}
    />
    <Routes>
      <Route path="/" element={<Home
      countries={countries}
      />}/>
      <Route path="/country/:countryName" element={<CountryInfo
      countries={countries}
      />}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App