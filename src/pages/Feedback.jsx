import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
// import { Navbar } from "@/components/Navbar"
import { Form } from "@/components/Feedback/Form"
import { FeedbackNavBar } from "../components/Feedback/FeedBackNavBar"
import { Dashboard } from "../components/Feedback/Dashboard"
// import { useState } from "react"

// checklist:
    // pass in the theme prop into form component from here 
export const Feedback = ({isDarkMode, toggleTheme}) => {
    // const [isSubmitted, setIsSubmitted] = useState(false)

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
            <StarBackground />
            <FeedbackNavBar />
            <main>
                <Form />
                <Dashboard />
            </main>
        </div>
    )
}