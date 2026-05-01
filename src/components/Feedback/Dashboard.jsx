import axios from "axios"
import {useState, useEffect} from "react"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const READ_ALL_FEEDBACKS = `${BACKEND_URL}/submissions`

export const Submission = () => {
    return (
        <div className="relative flex flex-col items-center bg-primary/50">
            <h2>Name</h2>
        </div>
    )
}

function Dashboard() {
    const [submissions, setSubmissions] = useState([])
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    function objectToArray(data) {
        let keys = Object.keys(data)
        const temp_submissions = keys.map(key => data[key])
        return temp_submissions
    }

    const fetchData = async() => {
        try{
            const {data} = await axios.get(READ_ALL_FEEDBACKS)
            submissions = objectToArray(data)
            // setSubmissions(submissions)
            setError("")
            setSuccess("Successfully retrieved submissions!")
            console.log(success)
        }
        catch(error) {
            setSuccess("")
            setError("Failed to retrieve submissions!")
            console.log(error)
        }
    } 

    useEffect(() => {
        fetchData()
    }, [submissions])


    return (
        <section id="dashboard" className="relative px-4 py-24">
            <div className="container flex flex-col items-center">
                {submissions.map((submission) => (
                    <Submission 
                        key={submission["email"]}
                        name={submission["name"]} 
                        email={submission["email"]}
                        feedback={submission["feedback"]}
                    />
                ))}
            </div>
        </section>
    )
}

export default Dashboard