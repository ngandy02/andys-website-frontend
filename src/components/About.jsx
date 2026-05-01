import { Code, Brain, Users} from "lucide-react"
import { cn } from "@/lib/utils"



export const About = ({isDarkMode}) =>{
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow "> 
                    About
                    <span className=" text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold"> Passionate Software Developer </h3>

                        <p className="text-muted-foreground">
                            As a recent graduate with a major in Computer Science and a minor in math and management, 
                            some of my most recent projets included in-game voice cloning, stock price predictions, and
                            a deployed journal publishing website.
                        </p>

                        <p className="text-muted-foreground">
                            I'm currently passionate in full-stack web development and building machine learning models 
                            using different learning methods to provide AI features in software products/services. I also
                            have experience in building RPG games, with my proudest game being "Pokeball Collector", inspired
                            by Pokemon Red. I am a team-first person that loves to collaborate with others and maintain transparency when working 
                            on projects to allow everyone to be on the same page and understand more about each others' 
                            perspective.
                        </p> 
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get In Touch</a>
                            <a href="Andys-Resume.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 ">
                            View CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className={cn("gradient-border p-6 card-hover",
                            isDarkMode ? "card-hover-dark" : "card-hover"
                        )}>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg"> Full-Stack Web Development </h4>
                                    <p className="text-muted-foreground"> 
                                        Creating both backend and frontend aspects of responsive websites and 
                                        applications using modern frameworks.
                                    </p>
                                </div>
                            </div> 
                        </div>
                        <div className={cn("gradient-border p-6 card-hover",
                            isDarkMode ? "card-hover-dark" : "card-hover"
                        )}>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Brain className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg"> ML/AI Models </h4>
                                    <p className="text-muted-foreground"> 
                                        Building and training machine learning models using unsupervised/surpervised
                                        and deep learning methods to implement AI features into existing or new applications 
                                        and services
                                    </p>
                                </div>
                            </div> 
                        </div>
                        <div className={cn("gradient-border p-6 card-hover",
                            isDarkMode ? "card-hover-dark" : "card-hover"
                        )}>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg"> RPG Games </h4>
                                    <p className="text-muted-foreground"> 
                                        Experienced in using libraries like OpenGL in C++ to create RPG games similar to the old-school 
                                        Pokemon Red/Blue that includes multiple levels, special effects, and in-game AI features
                                    </p>
                                </div>
                            </div> 
                        </div>
                        <div className={cn("gradient-border p-6 card-hover",
                            isDarkMode ? "card-hover-dark" : "card-hover"
                        )}>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg"> Team First Driven </h4>
                                    <p className="text-muted-foreground"> 
                                        Comfortable working in a team-based enviroment where communication and transparency is encounraged
                                    </p>
                                </div>
                            </div> 
                               
                        </div>


                    </div>
                </div>


            </div>
        </section>
    )
}