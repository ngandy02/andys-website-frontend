import {useState} from "react"
import { Smile } from "lucide-react"
// import { cn } from "../../lib/utils"
import axios from "axios"

// check list:
    // pass in the page theme prop into this form component so that we can swtich the theme of toggle for the submit button 
    // have the submit button call the put method on the backend endpoint 
        // before you do that add or import the backend EPs or add them to this frontend project
        // call axios and use the .put and .then methods 

export const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [feedback, setFeedback] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    const SUBMIT_FEEBACK_EP = `${BACKEND_URL}/submissions/create`
    
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const submission = {
            name: name,
            email: email,
            feedback: feedback
        }
        try{
            const response = await axios.put(SUBMIT_FEEBACK_EP, submission)
            setSuccess("Feedback successfully submitted!")
            console.log(`Submission entry: ${response.data}`)
            setError("")
            setName("")
            setEmail("")
            setFeedback("")
        }
        catch(error){
            setError(`Feedback failed to submit. ${error.response.data.message}`)
        }
    }

    return(
        <section id="form" className="relative flex items-center min-h-screen px-4">
            <div className="container bg-primary/50 h-full w-full p-8 mt-18">
                <h1 className="text-foreground font-bold text-2xl md:text-3xl mb-10">
                    Please Leave Your Comments and Feedback!
                </h1>
                <form onSubmit={handleSubmit}>
                    <h2 className="text-foreground font-bold text-2xl md:text-3xl mb-6">
                        Enter your name :
                    </h2>
                    <input className="mb-8 border bg-background" required type="name" placeholder="Enter you name" value={name} onChange={(e)=> {setName(e.target.value)}} />
                    <h2 className="text-foreground font-bold text-2xl md:text-3xl mb-6"> 
                        Enter your email :
                    </h2>
                    <input required className="mb-8 border bg-background" type="email" placeholder="Enter your email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    <h2 className="flex gap-3 justify-center items-center text-foreground font-bold text-2xl md:text-3xl mb-6"> 
                        Feedback or Comments <Smile color="yellow" size={40} />:
                    </h2>
                    <textarea required className="mb-10 border bg-background h-30 w-full" type="feedback" placeholder="Feedback and comments..." value={feedback} onChange={(e) => {setFeedback(e.target.value)}} />
                    <button type="submit" className="cosmic-button">
                        Submit
                    </button>
                </form>
                {success &&
                <div className="text-green"> {success} </div>}
                {error && 
                <div className="text-red"> {error} </div>}
            </div>
        </section>
    )
}