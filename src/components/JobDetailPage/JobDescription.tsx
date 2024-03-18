import { FC } from "react";
import { JobsData } from "../../../data";
import "./JobDetailPage.css";
interface JobDescriptionProps {
  filteredJob?: JobsData;
}

export const JobDescription: FC<JobDescriptionProps> = ({ filteredJob }) => {
  if (!filteredJob) {
    return null;
  }

  return (
    <div>
      <div>
        <div className="job--description--header">
          <div className="job--description--header--top">
            <p>{filteredJob.postedAt}</p>
            <span>.</span>
            <p>{filteredJob.contract}</p>
          </div>
          <div className="job--description--header--main">
            <h1>{filteredJob.position}</h1>

            <h4>{filteredJob.location}</h4>
          </div>
        </div>
        <button>Apply now</button>
        <p>{filteredJob.description}</p>
        <h2>Requirements</h2>
        <p>{filteredJob.requirements.content}</p>
        <ul>
          {filteredJob.requirements.items.map((requirement) => (
            <li>{requirement}</li>
          ))}
        </ul>
        <h2>WHat you will do</h2>
        <p>{filteredJob.role.content}</p>
        <ol>
          {filteredJob.role.items.map((role) => (
            <li>{role}</li>
          ))}
        </ol>
      </div>
      <button>Apply now</button>
    </div>
  );
};
