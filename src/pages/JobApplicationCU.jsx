import { useParams } from "react-router-dom";
import JobApplicationForm from "../components/JobApplicationForm"
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const JobApplicationCU = ({ isEdit }) => {
  const { jobId } = useParams(); // undefined in create mode

  const jobApplication = useSelector(
    (store) => store.jobApplications.find(app => app.id === Number(jobId)));

  if (isEdit && !jobApplication) return <p>Loading...</p>;


  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-screen pt-12">
        <h1
          className="selection:bg-purple-500 selection:text-white sm:text-3xl text-2xl font-bold text-center">
          {isEdit ? "Patch Job Application" : "Post Job Application"}
        </h1>
        <JobApplicationForm
          isEdit={isEdit}
          jobApplication={isEdit ? jobApplication : null}
        />
      </div>
      <Footer />
    </>
  )
}

export default JobApplicationCU