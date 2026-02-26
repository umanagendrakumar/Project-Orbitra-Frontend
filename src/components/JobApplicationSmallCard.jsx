import { statusColors } from "../utils/constants";

const JobApplicationSmallCard = ({ application }) => {

    return (
        <div className="border border-purple-200 w-64 shadow-md p-8 hover:scale-105 transition-transform duration-300">
            <h1 className="text-2xl font-bold mb-2 truncate">
                {application?.companyName}
            </h1>

            <div className="mb-6">
                <p className="text-gray-500 text-lg truncate">
                    {application?.jobRole}
                </p>
                <p className="text-gray-400 text-sm">
                    Job ID: {application?.jobId}
                </p>
            </div>

            <span className={`px-4 py-1 text-sm font-medium ${statusColors[application?.status]}`}>
                {application?.status}
            </span>
        </div>
    )
}

export default JobApplicationSmallCard;