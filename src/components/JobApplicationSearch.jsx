import { useEffect, useState } from 'react'
import { applicationStatuses, jobTypes } from '../utils/constants';
import api from '../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { setJobApplications } from '../store/jobAppSlice';

const JobApplicationSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedJobType, setSelectedJobType] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [sortOrder, setSortOrder] = useState("DESC");

    const dispatch = useDispatch();

    const fetchJobs = async () => {
        try {
            const res = await api.get("/job-applications", {
                params: {
                    query: searchQuery || undefined,
                    jobType: selectedJobType || undefined,
                    status: selectedStatus || undefined,
                    direction: sortOrder
                }
            });
            dispatch(setJobApplications(res.data));

        } catch (error) {
            console.error("Error fetching jobs", error);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, [searchQuery, selectedJobType, selectedStatus, sortOrder]);


    return (
        <div className="max-w-6xl mx-auto my-6">
            <div className="p-4 flex flex-col md:flex-row gap-4">

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search by company, role..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                />

                {/* Job Type Dropdown */}
                <select
                    value={selectedJobType}
                    onChange={(e) => setSelectedJobType(e.target.value)}
                    className="appearance-none border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                >
                    <option value="">All Job Types</option>
                    {jobTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>

                {/* Status Dropdown */}
                <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="appearance-none border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                >
                    <option value="">All Status</option>
                    {applicationStatuses.map(status => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                </select>

                {/* Filter Dropdown */}
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="appearance-none border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                >
                    <option value="DESC">Latest</option>
                    <option value="ASC">Oldest</option>
                </select>

            </div>
        </div>
    )
}

export default JobApplicationSearch