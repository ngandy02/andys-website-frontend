import {ThemeToggle} from "./Projects"
import {ResearchPapers} from "./ResearchPapers"
import { Projects } from "./Projects"
import {useState, useEffect} from "react"

export const PageTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme == "dark"){
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, [])

    return (
        <>
        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Projects isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <ResearchPapers isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </>
    )

}