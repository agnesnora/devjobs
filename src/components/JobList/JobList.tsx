import { FC, useState } from "react";
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
  const [message, setMessage] = useState<boolean>(false);
  const handleClick = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  };
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
      </div>
      {/* <button className="load--more--btn" onClick={handleClick}>
        Load more
      </button> */}
      {!message ? (
        <button className="load--more--btn" onClick={handleClick}>
          Load more
        </button>
      ) : (
        <h1 style={{ textAlign: "center", color: "#9daec2" }}>
          Currently there are no more open positions
        </h1>
      )}
    </div>
  );
};
