import { Home } from "./pages/Home";
import { Feedback } from "./pages/Feedback";
import { NotFound } from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {useState, useEffect} from "react"

function App() {
.
  const [isDarkMode, setIsDarkMode] = useState(false)
    
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
      if (storedTheme == "dark"){
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      } 
      else {
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
      }
  }, [])


  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } 
    else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}/>
          <Route path="/feedback" element={<Feedback isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
