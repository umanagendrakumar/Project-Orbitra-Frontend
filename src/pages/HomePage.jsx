import { useEffect } from "react";
import api from "../utils/axios";
import { Link } from "react-router-dom";
import JobApplicationSmallCard from "../components/JobApplicationSmallCard";
import { useDispatch, useSelector } from "react-redux";
import { setJobApplications } from "../store/jobAppSlice";
import JobApplicationSearch from "../components/JobApplicationSearch";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
    const jobApplications = useSelector((store) => store.jobApplications);

    const dispatch = useDispatch();

    const fetchJobApplications = async () => {
        try {
            const res = await api.get("/job-applications");
            dispatch(setJobApplications(res.data))
        } catch (error) {
            console.error("Error fetching job applications:", error);
        }
    }

    useEffect(() => {
        fetchJobApplications();
    }, []);

    return (
        <div className="min-h-screen flex flex-col overflow-hidden">
            <Navbar />

            <div className="flex-1 flex flex-col justify-center items-center p-6 pt-12">

                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-1">
                        Your Applications
                    </h1>
                    <p className="text-gray-500">
                        Track progress. Stay organized. Win more offers.
                    </p>
                </div>

                <JobApplicationSearch />

                <Link
                    to="/job-application/post"
                    className="
                     bg-linear-to-r from-purple-600 to-blue-600
                     text-white px-6 py-3 mb-6
                     shadow-md hover:shadow-lg
                     hover:scale-105 transition"
                >
                    + Add Application
                </Link>


                {jobApplications.length === 0 ? (
                    <p className="text-gray-500 text-lg">
                        No job applications found.
                    </p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {jobApplications.map((application) => (
                            <Link
                                key={application.id}
                                to={`/job-application/get/${application.id}`}
                            >
                                <JobApplicationSmallCard application={application} />
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )

}

export default HomePage;