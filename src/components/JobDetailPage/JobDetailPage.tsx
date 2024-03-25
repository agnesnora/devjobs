import { FC, useContext } from "react";
import { useParams } from "react-router-dom";
import { JobsData } from "../../../data";
import { CompanyCard } from "./CompanyCard";
import { JobDescription } from "./JobDescription";
import { Button } from "../Button/Button";
import { ThemeContext } from "../../App";

interface RouteParams {
  id: string;
  [key: string]: string | undefined; // Adjusted to allow number type
}
interface JobDetailProps {
  filteredJobs: JobsData[];
}

export const JobDetailPage: FC<JobDetailProps> = ({ filteredJobs }) => {
  const theme = useContext(ThemeContext);
  const params = useParams<RouteParams>();
  const filteredJob = filteredJobs.find(
    (job) => job.id.toString() === params.id
  );

  return (
    <div>
      <div className="job--description--page--container">
        <CompanyCard filteredJob={filteredJob} />
        <JobDescription filteredJob={filteredJob} />
      </div>
      <footer
        className={theme?.theme === "light" ? "footer--light" : "footer--dark"}
      >
        {(theme?.windowWidth ?? 768) < theme?.screen.mobile ? (
          <Button className="apply--btn" path={"#"}>
            Apply Now
          </Button>
        ) : (
          <div className="footer--flex--wrapper">
            {" "}
            <div>
              {" "}
              <h1>{filteredJob?.position}</h1>
              <p>{filteredJob?.company}</p>
            </div>{" "}
            <Button className="apply--btn" path={"#"}>
              Apply Now
            </Button>
          </div>
        )}
      </footer>
    </div>
  );
};
