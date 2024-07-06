import JobListing from './JobListing';
// import jobs from '../jobs.json';
import { useState, useEffect } from 'react';
import { renderMatches } from 'react-router-dom';
import Spinner from './Spinner';

// to make request -
// useEffect - allows components to have side effects and we want the side effect of fetching data when the component renders
// useState - when we get those jobs from api, we want to put them in states so we use useState


const JobListings = ({ isHome = false }) => {
    // const jobListings = isHome ? jobs.slice(0, 3) : jobs;

    // empty array in useState because the empty array will make the request when the component loads through the useEffect and then we will fill the state with the response from the API
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome ? '/api/jobs/?_limit=3' : '/api/jobs';
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        }
        fetchJobs();
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </section >
    )
}

export default JobListings