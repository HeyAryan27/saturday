import React from "react";
import JobCard from "./JobCard"
import { jobList } from "../utils/constant"; // Adjust the import path based on your file structure
import "../_styles/index.scss";
function JobList() {
  return (
    <div className="">
      <div className="text-lg font-semibold mb-4">Posted Jobs</div>
      <div className="flex gap-2">
        {jobList.map((job, idx) => (
          <div className="w-full md:w-1/4 p-1" key={idx}>
            <JobCard key={idx} id={idx} jobDetail={job} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobList;
