import { useState } from "react"
import { cn } from "@/lib/utils"

export const Skills = (isDarkMode) => {
    const [activeCategory, setActiveCategory] = useState("All")
    
    const skills = [
        //frontend
        {name: "HTML/CSS", level: 80, category: "Frontend"},
        {name: "React", level: 90, category: "Frontend"}, 
        {name: "Tailwind CSS", level: 70, category: "Frontend"},
        {name: "JavaScript", level: 85, category: "Frontend"},
        {name: "TypeScript", level: 80, category: "Frontend"},

        //backend
        {name: "C++", level: 95, category: "Backend"},
        {name: "Python", level: 95, category: "Backend"},
        {name: "C", level: 90, category: "Backend"},
        {name: "SQL", level: 88, category: "Backend"},
        {name: "Java", level: 80, category: "Backend"},

        //tools
        {name: "Git/Github", level: 90, category: "Tools"},
        {name: "BitBucket", level: 85, category: "Tools"},
        {name: "VS Code", level: 95, category: "Tools"},
        {name: "MongoDB", level: 88, category: "Tools"},
        {name: "MySQL", level: 70, category: "Tools"},
        {name: "phpMyAdmin", level: 60, category: "Tools"},
        {name: "Apache NetBeans", level: 80, category: "Tools"},
        {name: "AWS", level: 50, category: "Tools"},

        //HDL
        {name: "Verilog", level: 65, category: "HDL"},
    ]
    
    const categories = ["All", "Frontend", "Backend", "Tools", "HDL"]


    return(
        <section id="skills" className="relative py-24 px-4 bg-primary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary text-glow"> Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key} 
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            isDarkMode ? "card-hover-dark": "card-hover",
                            activeCategory == category ? "bg-primary text-primary-foreground" : "text-primary-foreground"
                        )}
                        onClick={() => {setActiveCategory(category)}}>
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8">
                    {skills.map((skill, key) => {
                        if (skill.category !== activeCategory && activeCategory !== "All"){
                            return null
                        }
                        return (
                            <div 
                                key={key}
                                className={cn("bg-card p-6 rounded-lg shadow-xs",
                                    isDarkMode ? "card-hover-dark" : "card-hover"
                                )}
                                >
                                    <h3 className="text-glow text-foreground text-left mb-4">{skill.name}</h3>
                                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                        <div className="bg-primary h-2 rounded-full origin-left animate-bar"
                                        style={{width: skill.level + "%"}}> 
                                        </div>
                                    </div>
                                    <div className="text-middle mt-1 text-sm text-muted-foreground">
                                        {skill.level}%
                                    </div>
                                
                            </div>   
                        )
                       
})}
                </div> 
            </div>
        </section>
    )
}