import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { About } from "../components/About"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import { ResearchPapers} from "../components/ResearchPapers"
import { useEffect, useState} from "react"

export const Home = () => {
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

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    
    }
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

            {/* Background Effects */}
            <StarBackground />
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <About isDarkMode={isDarkMode} />
                <Skills isDarkMode={isDarkMode} />
                <ResearchPapers isDarkMode={isDarkMode} />
                <Projects isDarkMode={isDarkMode}/>
                <Contact />
            </main>

            {/* Footer */}
        </div>
    )
}
