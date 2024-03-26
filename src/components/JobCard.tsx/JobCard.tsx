import { FC, useContext } from "react";
import { JobsData } from "../../../data";
import { ThemeContext } from "../../App";
import { NavLink } from "react-router-dom";
import "./JobCard.style.css";

interface JobCardProps {
  filteredJobs: JobsData[];
}

export const JobCard: FC<JobCardProps> = ({ filteredJobs }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      {filteredJobs.map((job) => (
        <NavLink to={`/jobs/${job.id}`}>
          <div
            key={job.id}
            className={`jobcard--container jobcard--container--${
              themeContext?.theme === "light" ? "light" : "dark"
            }`}
          >
            <div
              className="company--logo"
              style={{
                backgroundImage: `url(${job.logo})`,
                backgroundColor: job.logoBackground,
              }}
            ></div>
            <div className="card--header">
              <p>{job.postedAt}</p>
              <span>.</span>
              <p>{job.contract}</p>
            </div>
            <div className="card--main">
              <h1>{job.position}</h1>
              <p>{job.company}</p>
              <h4>{job.location}</h4>
            </div>
          </div>
        </NavLink>
      ))}
    </>
  );
};
