import { useParams } from "react-router-dom";
import JobApplicationForm from "../components/JobApplicationForm"
import { useSelector } from "react-redux";

const JobApplicationCU = ({ isEdit }) => {
  const { jobId } = useParams(); // undefined in create mode
  // console.log("Job ID from URL:", jobId);

  const jobApplication = useSelector(
    (store) => store.jobApplications.find(app => app.id === Number(jobId)));

  if (isEdit && !jobApplication) return <p>Loading...</p>;

  // console.log("Job Application from Store:", jobApplication);


  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-12">
      <h1 className="selection:bg-purple-500 selection:text-white sm:text-3xl text-2xl font-bold mb-8 text-center">
        {isEdit ? "Patch Job Application" : "Post Job Application"}
      </h1>
      <JobApplicationForm isEdit={isEdit} jobApplication={isEdit ? jobApplication : null} />
    </div>
  )
}

export default JobApplicationCU