import { JobsData } from "../data";

export const filterJobs = (
  location: string,
  position: string,
  contract: boolean,
  jobs: JobsData[]
) => {
  const locationPattern = new RegExp(location, "i");
  const positionPattern = new RegExp(position, "i");
  const filteredData = jobs.filter((job) => {
    const isLocationMatch = locationPattern.test(job.location);
    const isPositionMatch = positionPattern.test(job.position);
    const isContractMatch = contract ? job.contract === "Full Time" : true;

    return isLocationMatch && isPositionMatch && isContractMatch;
  });
  return filteredData;
};
