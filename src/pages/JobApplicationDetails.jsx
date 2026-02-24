import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import JobApplicationFullCard from "../components/JobApplicationFullCard";
import StatusHistory from "../components/StatusHistory";
import { useEffect } from "react";
import { setStatusHistory } from "../store/StatusHistorySlice";
import api from "../utils/axios";

const JobApplicationDetails = () => {
  const { jobId } = useParams();
  const dispatch = useDispatch();


  const jobApplication = useSelector(
    (store) => store.jobApplications.find(
      (application) => application.id === parseInt(jobId)
    ));

  const fetchStatusHistory = async () => {
    try {
      const statusHistoryRes = await api.get(`/status-history/${jobId}`);
      dispatch(setStatusHistory(statusHistoryRes.data));
    } catch (error) {
      console.error("Failed to fetch status history", error);
    }
  }

  useEffect(() => {
    fetchStatusHistory();
  }, []);


  // console.log(jobApplication);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-6 pt-12">

      <h1 className="selection:bg-purple-500 selection:text-white sm:text-3xl text-2xl font-bold mb-8 text-center border-b border-gray-400 pb-1">
        Job App Full Details
      </h1>
      { !jobApplication ? <p className="text-gray-500">Job application not found.</p> : <JobApplicationFullCard jobApplication={jobApplication} /> }
    </div>
  )
}

export default JobApplicationDetails;