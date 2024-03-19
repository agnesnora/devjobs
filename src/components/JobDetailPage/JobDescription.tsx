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
      <div className="job--detail--container">
        <div className="job--detail--header">
          <div className="job--detail--header--top">
            <p>{filteredJob.postedAt}</p>
            <span>.</span>
            <p>{filteredJob.contract}</p>
          </div>
          <div className="job--detail--header--main">
            <h1>{filteredJob.position}</h1>

            <h4>{filteredJob.location}</h4>
          </div>
        </div>
        <button>Apply now</button>
        <main className="job--detail--main">
          <p>{filteredJob.description}</p>
          <h2>Requirements</h2>
          <p>{filteredJob.requirements.content}</p>
          <ul>
            {filteredJob.requirements.items.map((requirement) => (
              <li>{requirement}</li>
            ))}
          </ul>
          <h2>What you will do</h2>
          <p>{filteredJob.role.content}</p>
          <ol>
            {filteredJob.role.items.map((role) => (
              <li>{role}</li>
            ))}
          </ol>
        </main>
      </div>
      <footer>
        <button>Apply now</button>
      </footer>
    </div>
  );
};
