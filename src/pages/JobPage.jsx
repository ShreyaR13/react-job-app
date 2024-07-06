import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

// Note - useEffect can be used to fetch data here as well, the way we did for fetchJobs()
// However, here we will use react router's data loader
// data loader - we create a  function in this file and we export it from this file and use that function in other areas
// we can use this as a global state for whatever this job is and pass it on to other components.
const JobPage = () => {
    // initialize useState and pass null to it
    const [job, setJob] = useState(null);
    // to get job id use useParams()
    const { id } = useParams();
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                setJob(data);
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setloading(false);
            }
        }
        fetchJob();
    }, []);


    return (
        loading ? <Spinner /> : <h1>{job.title}</h1>
    )
}

export default JobPage