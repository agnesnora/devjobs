import { FC } from "react";
import { useParams } from "react-router-dom";
import { JobsData } from "../../../data";
import { CompanyCard } from "./CompanyCard";
import { JobDescription } from "./JobDescription";

interface RouteParams {
  id: string;
  [key: string]: string | undefined; // Adjusted to allow number type
}
interface JobDetailProps {
  filteredJobs: JobsData[];
}

export const JobDetailPage: FC<JobDetailProps> = ({ filteredJobs }) => {
  const params = useParams<RouteParams>();
  const filteredJob = filteredJobs.find(
    (job) => job.id.toString() === params.id
  );

  return (
    <div className="job--description--page--container">
      <CompanyCard filteredJob={filteredJob} />
      <JobDescription filteredJob={filteredJob} />
    </div>
  );
};
