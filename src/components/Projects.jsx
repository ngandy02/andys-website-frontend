import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export const Projects = ({isDarkMode}) => {

 
    
    const projects = [
        {id: 1, title: "Journal Publisher", img: "/projectsPics/journalPublisher.jpg", githubURL1: "https://github.com/ngandy02/mmankwgzrz" , githubURL2: "https://github.com/ngandy02/makgr-frontend" },
        {id: 2, title: "Stock Price Predictor", img: "/projectsPics/stockPricePredictor.jpeg", githubURL1: "https://github.com/ngandy02/ML-stock-prediction" },
        {id: 3, title: "Lethal Mimicry Mod", img: "projectsPics/voiceMimicry.jpg", githubURL1: "https://github.com/ngandy02/LethalMimicryFinalMod"},
        {id: 4, title: "Airline Reservation System", img: "projectsPics/airlineReservationSystem.png", githubURL1: "https://github.com/ngandy02/Airline-Reservation-System"},
        {id: 5, title: "Pokebal Collector", img: "projectsPics/pokeball.png", githubURL1: "https://github.com/ngandy02/PokeBall-Collector"},
        {id: 6, title: "MindRush", img: "projectsPics/mindRush.png", githubURL1: "https://github.com/ngandy02/MindRush"},
        {id: 7, title: "Platformer", img: "projectsPics/platformer.jpg", githubURL1: "https://github.com/ngandy02/Platformer"},
        {id: 8, title: "Lunar Lander", img: "projectsPics/lunarLander.jpg", githubURL1: "https://github.com/ngandy02/Lunar-Lander"},
        {id: 9, title: "Rise of the AI", img: "projectsPics/riseOfAI.jpg", githubURL1: "https://github.com/ngandy02/Rise-of-the-AI"},
    ]
    return (
        <section id="projects" className="relative py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-glow font-bold text-3xl md:text-4xl text-center mb-12">
                    My <span className="text-primary">Projects</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8">
                    
                    {projects.map((project, key) => {
                        return(
                            <div key={key} className={cn("relative transition-colors  rounded-full rounded-lg bg-card shadow-xs p-6",
                                isDarkMode ? "card-hover-dark" : "card-hover"
                            )}> 
                                <div className="p-8">
                                    <img className={cn(
                                        isDarkMode ? "box-glow" : "shadow-lg"
                                    )} src={project.img}/>
                                    
                                </div>
                                <div className="flex justify-center space-x-3">
                                    <h3 className="font-bold text-center mb-6">{project.title}</h3>
                                    < ExternalLink />
                                </div>
                                <div className="flex justify-center gap-3 items-center">
                                    {project.githubURL2 &&
                                    <label>
                                        Backend:
                                    </label>} 
                                    <a href={project.githubURL1}>
                                        
                                        <Github color="indigo"/>
                                    </a> 
                                     
                                    {project.githubURL2 && 
                                    <label>
                                        Frontend:
                                    </label> }
                                    {project.githubURL2 &&
                                    <a href={project.githubURL2}>
                                        <Github color="inidgo"/>
                                    </a>}
                                    
                                </div>  
                            </div>
                                    )
                })}
                    

                </div>
                <div className="text-center p-8">
                    <a href="https://github.com/ngandy02" className="cosmic-button flex w-fit items-center mx-auto gap-4">
                        My Github <ArrowRight size={18}/>   
                    </a>
                </div>
            </div>    
        </section>
    )

}