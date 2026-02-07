import {Mail, Linkedin, Phone} from "lucide-react"

export const Contact = () => {
    return (
        <section id="contact" className="relative py-24 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-glow font-bold text-3xl md:text-4xl text-center mb-12">
                    <span className="text-primary"> Contact </span> Me
                </h2>
                <div className=" relative flex flex-col gap-y-20 mx-auto bg-primary/80 h-120 w-100 box-glow p-12">
                    <div className=" flex rounded-full font-bold mx-auto p-8 text-glow bg-background h-8 w-80 items-center justify-center gap-3">
                        <h3>
                            Email: <a href="mailto:an3299@nyu.edu" target="_blank" className="text-primary"> an3299@nyu.edu</a>
                        </h3> 
                         <a href="mailto:an3299@nyu.edu" target="_blank"> <Mail color="indigo"/> </a>
                    </div>
                    <div className=" flex rounded-full font-bold mx-auto p-8 text-glow bg-background h-8 w-80 items-center justify-center gap-3">
                        <h3>LinkedIn: </h3>
                        <a href="https://www.linkedin.com/in/ngandy0202/" target="-blank">
                            <Linkedin color="indigo"/>
                        </a>  
                    </div>
                    <div className=" flex rounded-full font-bold mx-auto p-8 text-glow bg-background h-8 w-80 items-center justify-center gap-3">
                        <h3>
                            <span className="inline-flex gap-3 items-center"> <Phone size={18}/> Phone Number:<br /> </span>
                            <br />
                            <span className="text-primary">(+1) 917-780-5603</span>
                        </h3>

                    </div>


                    
                </div>
                
            </div>
        </section>
    )
}