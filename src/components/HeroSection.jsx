import {ArrowDown} from "lucide-react"
import {useEffect, useState} from "react" 
import{cn} from "@/lib/utils"

export const HeroSection = () => {
    const [isScroll, setIsScroll] = useState(false)
    const [isAtBottom, setIsAtBottom] = useState(false)
    let timeout;

    useEffect( () => {
        
        const handleScroll = () => {
            setIsScroll(true)

            const windowHeight = window.innerHeight
            const scrollY = window.scrollY
            const elementHeight = document.documentElement.scrollHeight
            if (windowHeight + scrollY >= elementHeight){
                setIsAtBottom(true)
            }
            else{
                setIsAtBottom(false)
            }
            if (timeout) { // checks if there is an existing timeoutID stored in timeout
                // prevents setTimeout to execute setIsScroll if user continues scrolling even after the set delayed duration
                clearTimeout(timeout)
                // clears the timeout to reset the delay time back to zero
            }
            timeout = setTimeout(() => {
                setIsScroll(false)
            }, 500)
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <section 
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-light">
                        <span className="text-foreground opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary text-glow opacity-0 animate-fade-in-delay-1"> Andy </span>
                        <span className="text-primary text-glow opacity-0 animate-fade-in-delay-2" > Ng </span>
                       
                    </h1>
                    <p className="box-glow text-md md:text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4 p-3">
                        An NYU graduate with a Bachelors of Science in Computer Science and a minor in Math and Management, 
                        with experience in full-stack web developement, Machine Learning/AI, and RPG game creation
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Projects and Research
                        </a>
                    </div>
                </div>
            </div>
            <div className={cn("fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-800",
                (isScroll || isAtBottom) ? "opacity-0" : "opacity-90",
            )}>
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    )
}