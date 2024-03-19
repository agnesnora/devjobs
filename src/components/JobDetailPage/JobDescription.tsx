import { FC } from "react";
import { JobsData } from "../../../data";
import { Button } from "../Button/Button";
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
        <Button className="apply--btn" path={filteredJob.website}>
          Apply Now
        </Button>
        <main className="job--detail--main">
          <p>{filteredJob.description}</p>
          <h1>Requirements</h1>
          <p>{filteredJob.requirements.content}</p>
          <ul>
            {filteredJob.requirements.items.map((requirement) => (
              <li>{requirement}</li>
            ))}
          </ul>
          <h1>What you will do</h1>
          <p>{filteredJob.role.content}</p>
          <ol>
            {filteredJob.role.items.map((role) => (
              <li>{role}</li>
            ))}
          </ol>
        </main>
      </div>
      <footer>
        <Button className="apply--btn" path={filteredJob.website}>
          Apply Now
        </Button>
      </footer>
    </div>
  );
};
