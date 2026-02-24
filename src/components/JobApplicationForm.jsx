import { useState } from "react";
import api from "../utils/axios";
import { Input, Select } from "./Input";
import { applicationStatuses, jobTypes } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateJobApplication } from "../store/jobAppSlice";

const JobApplicationForm = ({ isEdit, jobApplication }) => {

  const [formData, setFormData] = useState({
    companyName: jobApplication?.companyName || "",
    jobRole: jobApplication?.jobRole || "",
    jobId: jobApplication?.jobId || "",
    jobType: jobApplication?.jobType || "FULL_TIME",
    applyLink: jobApplication?.applyLink || "",
    companyProfileLink: jobApplication?.companyProfileLink || "",
    status: jobApplication?.status || "APPLIED",
    source: jobApplication?.source || "",
    dateApplied: jobApplication?.dateApplied
      ? jobApplication.dateApplied.slice(0, 16)
      : "",
    notes: jobApplication?.notes || ""
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (isEdit) {
        const res = await api.patch(`/job-applications/${jobApplication.id}`, {
          ...formData,
          dateApplied: formData.dateApplied
            ? new Date(formData.dateApplied).toISOString()
            : null
        });
        dispatch(updateJobApplication(res.data));

      } else {
        await api.post("/job-applications", {
          ...formData,
          dateApplied: formData.dateApplied
            ? new Date(formData.dateApplied).toISOString()
            : null
        });
      }

    } catch (err) {
      console.error("Failed to save application", err.response);
    } finally {
      setLoading(false);
      navigate(-1);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white shadow-sm sm:p-8 p-4 space-y-8"
    >
      <div className="grid sm:grid-cols-2 gap-6">

        <Input label="Company Name**" name="companyName" value={formData.companyName} onChange={handleChange} required />

        <Input label="Job Role**" name="jobRole" value={formData.jobRole} onChange={handleChange} required />

        <Input label="Job ID" name="jobId" value={formData.jobId} onChange={handleChange} />

        <Select label="Job Type**" name="jobType" value={formData.jobType} onChange={handleChange} options={jobTypes} />

        <Input label="Applied Link" name="applyLink" value={formData.applyLink} placeholder="paste valid link" onChange={handleChange} />

        <Input label="Company Profile Link" name="companyProfileLink" value={formData.companyProfileLink} placeholder="paste valid link" onChange={handleChange} />

        <Select label="Status**" name="status" value={formData.status} onChange={handleChange} options={applicationStatuses} />

        <Input label="Source" name="source" value={formData.source} placeholder="LinkedIn, Referral, etc." onChange={handleChange} />

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Date Applied**</label>
          <input
            type="datetime-local"
            name="dateApplied"
            value={formData.dateApplied}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

      </div>

      {/* Notes */}
      <div className="">
        <label className="text-sm text-gray-600 mb-1">Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Email used, PhNo used, etc..."
          rows={4}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className=" bg-blue-600 text-white px-6 py-3 cursor-pointer disabled:opacity-70"
      >
        {loading ? "Saving..." : "Save Application"}
      </button>

    </form>
  );
};

export default JobApplicationForm;