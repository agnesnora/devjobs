import { FC } from "react";
import { JobsData } from "../../../data";

interface JobCardProps {
  filteredJobs: JobsData[];
}

export const JobCard: FC<JobCardProps> = ({ filteredJobs }) => {
  console.log(filteredJobs);
  return <div>I am the job card</div>;
};
