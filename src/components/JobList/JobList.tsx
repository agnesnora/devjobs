import { FC } from "react";
import { JobsData } from "../../../data";
import { JobCard } from "../JobCard.tsx/JobCard";
// import { ThemeContext } from "../../App";

interface JobListProps {
  filteredJobs: JobsData[];
}

export const JobList: FC<JobListProps> = ({ filteredJobs }) => {
  console.log(filteredJobs);
  // const themeContext = useContext(ThemeContext);
  return (
    <div className="joblist--container">
      <JobCard filteredJobs={filteredJobs} />
    </div>
  );
};
