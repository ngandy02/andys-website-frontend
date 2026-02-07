import { Link } from "lucide-react"
import { cn } from "@/lib/utils"

export const ResearchPapers = ({isDarkMode}) => {
    const papers = [
        {title: "Player Voice Mimicry in Lethal Company", URL: "https://player-voice-mimicry.tiiny.site/", 
            img: "/researchpaper/images/lethalCompanyResearchPaper.jpg"},
        {title: "Hierarchical Skill Acquisition through LLM-guided Program Synthesis", 
            URL: "https://copper-jesse-49.tiiny.site/Hierarchical-Skill-Acquisition-through-LLM-guided-Program-Synthesis.pdf",
            img: "/researchpaper/images/minecraftResearchPaper.jpg"
        },
        {title: "Evolution of NPC to Optimize Pokémon RPG Player Experience",
            URL: "https://copper-jesse-49.tiiny.site/Evolution-of-NPC-to-Optimize-Pokemon-RPG-Player-Experience.pdf",
            img: "/researchpaper/images/pokemonResearchPaper.jpg"
         }
    ]
    return (
        <section id="papers" className="relative px-4 py-24">
            <div className="container max-w-5xl">
                <h2 className="mx-auto font-bold text-glow text-3xl md:text-4xl mb-12">
                    My <span className="text-primary">Research</span> Papers 
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {papers.map((paper, key) => (
                        <div key={key} className={cn("relative transition-colors rounded-full rounded-lg bg-card shadow-xs p-6",
                            isDarkMode ? "card-hover-dark": "card-hover"
                        )}>
                            <div className="flex flex-col gap-8">
                                <img className={cn("p-8 h-78",
                                    isDarkMode ? "box-glow" : "shadow-lg"
                                )} alt={paper.title} src={paper.img}/>
                                <div>
                                <h3 className="text-center font-bold ">{paper.title}</h3>
                                <br/>
                                <a href={paper.URL} target="_blank">
                                     <Link className="mx-auto"/>
                                </a>
                                </div>
                            </div>
                           


                        </div>
                        
                    ))}                        
                </div>
            </div>
        </section>
    )
}