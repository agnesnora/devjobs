import { FC } from "react";
import { JobsData } from "../../../data";
import { JobCard } from "../JobCard.tsx/JobCard";

interface JobListProps {
  filteredJobs: JobsData[];
}

export const JobList: FC<JobListProps> = ({ filteredJobs }) => {
  console.log(filteredJobs);
  return (
    <div>
      <JobCard filteredJobs={filteredJobs} />
    </div>
  );
};
