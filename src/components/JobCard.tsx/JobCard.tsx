import { FC } from "react";
import { JobsData } from "../../../data";

interface JobCardProps {
  filteredJobs: JobsData[];
}

export const JobCard: FC<JobCardProps> = ({ filteredJobs }) => {
  console.log(filteredJobs);
  return (
    <>
      {filteredJobs.map((job) => (
        <div key={job.id}>
          <div>Logo</div>
          <div className="card--header">
            <p>{job.postedAt}</p>
            <p>{job.contract}</p>
          </div>
          <div className="card--main">
            <h1>{job.position}</h1>
            <p>{job.company}</p>
            <h4>{job.location}</h4>
          </div>
        </div>
      ))}
    </>
  );
};
