import { FC, useContext } from "react";
import { JobsData } from "../../../data";
import { ThemeContext } from "../../App";
import "./JobCard.css";

interface JobCardProps {
  filteredJobs: JobsData[];
}

export const JobCard: FC<JobCardProps> = ({ filteredJobs }) => {
  console.log(filteredJobs);
  const themeContext = useContext(ThemeContext);
  return (
    <>
      {filteredJobs.map((job) => (
        <div
          key={job.id}
          className={`jobcard--container--${
            themeContext?.theme === "light" ? "light" : "dark"
          }`}
        >
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
