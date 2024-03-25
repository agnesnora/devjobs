import { FC, useContext } from "react";
import { JobsData } from "../../../data";
import { Button } from "../Button/Button";
import { ThemeContext } from "../../App";
import "./JobDetailPage.css";
interface JobDescriptionProps {
  filteredJob?: JobsData;
}

export const JobDescription: FC<JobDescriptionProps> = ({ filteredJob }) => {
  const context = useContext(ThemeContext);
  if (!filteredJob) {
    return null;
  }

  return (
    <div>
      <div>
        <div
          className={`job--detail--container job--detail--container--${
            context?.theme === "light" ? "light" : "dark"
          }`}
        >
          <div className="job--detail--header--flex">
            {" "}
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
            {/* {context?.windowWidth > 768 ? (
              <Button className="apply--btn" path={filteredJob.website}>
                Apply Now
              </Button>
              
            ) : null} */}
            {context?.windowWidth && context?.windowWidth > 768 && (
              <Button className="apply--btn" path={filteredJob.website}>
                Apply Now
              </Button>
            )}
          </div>

          {context?.windowWidth && context?.windowWidth < 768 && (
            <Button className="apply--btn" path={filteredJob.website}>
              Apply Now
            </Button>
          )}
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
      </div>{" "}
      {/* <footer>
        <Button className="apply--btn" path={filteredJob.website}>
          Apply Now
        </Button>
      </footer> */}
    </div>
  );
};
