import { FC } from "react";
import { JobsData } from "../../../data";
import { JobCard } from "../JobCard.tsx/JobCard";
import "./JobList.style.css";
import { Search } from "../Search/Search";
import { Button } from "../Button/Button";

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
    <div className="desktop--joblist--container">
      <Search
        jobs={jobs}
        filteredJobs={filteredJobs}
        setFilteredJobs={setFilteredJobs}
      />
      <div className="joblist--container">
        {" "}
        <JobCard filteredJobs={filteredJobs} />
        <Button path="#" className="load--more--btn">
          Load more
        </Button>
      </div>
    </div>
  );
};
