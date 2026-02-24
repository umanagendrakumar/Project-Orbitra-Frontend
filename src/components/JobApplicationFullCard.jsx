import { Link, useNavigate } from "react-router-dom";
import api from "../utils/axios";
import { formatDate, statusColors } from "../utils/constants";
import StatusHistory from "./StatusHistory";

const JobApplicationFullCard = ({ jobApplication }) => {

    const navigate = useNavigate();

    const {
        id,
        companyName,
        companyProfileLink,
        jobRole,
        jobId,
        jobType,
        status,
        applyLink,
        source,
        notes,
        dateApplied,
        createdAt,
        updatedAt
    } = jobApplication;


    const handleDelete = () => {
        const confirmed = window.confirm("Are you sure to delete this job application? This action cannot be undone.");
        if (!confirmed) return;
        try {
            api.delete(`/job-applications/${id}`);
            alert("Job application deleted successfully.");
            navigate(-1);
        } catch (error) {
            console.error("Error deleting job application:", error);
            alert("Failed to delete job application. Please try again.");
        }
    }

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-sm p-8 space-y-8">

            {/* Header */}
            <div className=" flex sm:flex-row flex-col sm:justify-between sm:items-center items-start gap-4">
                <div className="">
                    <h1 className="text-3xl font-bold">
                        {companyName}
                    </h1>
                    <p className="text-gray-500 text-lg">
                        {jobRole}
                    </p>
                    {
                        jobId && (
                            <p className="text-gray-400 text-sm">
                                Job ID: {jobId}
                            </p>
                        )
                    }
                </div>

                <span className={` px-4 py-1 rounded-full sm:text-sm text-xs font-medium ${statusColors[status]}`}>
                    {status}
                </span>
            </div>

            {/* Links Section */}
            <div className=" grid sm:grid-cols-2 gap-6">
                {companyProfileLink && (

                    <div>

                        <p className="text-sm text-gray-500">Company Profile</p>
                        <a
                            href={companyProfileLink}
                            className="text-blue-600 hover:underline break-all"
                        >
                            {companyProfileLink}
                        </a>

                    </div>
                )
                }

                {applyLink && (

                    <div>
                        <p className="text-sm text-gray-500">Applied Link</p>
                        <a
                            href={applyLink}
                            className="text-blue-600 hover:underline break-all"
                        >
                            {applyLink}
                        </a>
                    </div>
                )
                }
            </div>

            {/* Meta Information */}
            <div className="grid sm:grid-cols-2 gap-6">

                <div>
                    <p><span className="font-medium">Job Type:</span> {jobType}</p>
                    {
                        source && <p><span className="font-medium">Source:</span> {source}</p>
                    }
                </div>

                <div>
                    <p><span className="font-medium sm:text-md text-sm"> Applied on:</span> {formatDate(dateApplied)}</p>
                    <p className="text-gray-400 text-sm"><span>Created At:</span> {formatDate(createdAt)}</p>
                    <p className="text-gray-400 text-sm"><span>Last Updated:</span> {formatDate(updatedAt)}</p>
                </div>

            </div>

            {/* Notes */}
            {notes && (
                <div>
                    <p className="text-sm text-gray-500 mb-2">Notes</p>
                    <div className="bg-gray-100 p-4 text-gray-700">
                        {notes}
                    </div>
                </div>
            )}

            <div className="flex space-x-4">
                <Link to={`/job-application/patch/${id}`} className="w-20 text-center bg-blue-500 text-white px-4 py-2 cursor-pointer">
                    Edit
                </Link>
                <button onClick={handleDelete} className="w-20 text-center bg-red-500 text-white px-4 py-2 cursor-pointer ">
                    Delete
                </button>
            </div>
            <StatusHistory />
        </div>
    );
};

export default JobApplicationFullCard;