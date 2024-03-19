import { FC } from "react";
import { JobsData } from "../../../data";
import { JobCard } from "../JobCard.tsx/JobCard";
import "./JobList.style.css";
import { Search } from "../Search/Search";

interface JobListProps {
  jobs: JobsData[];
  filteredJobs: JobsData[];
  setFilteredJobs: React.Dispatch<React.SetStateAction<JobsData[]>>;
}

export const JobList: FC<JobListProps> = ({
  filteredJobs,
  jobs,
  setFilteredJobs,
}) => {
  return (
    <div className="joblist--container">
      <Search
        jobs={jobs}
        filteredJobs={filteredJobs}
        setFilteredJobs={setFilteredJobs}
      />
      <JobCard filteredJobs={filteredJobs} />
    </div>
  );
};
