import { JobsData } from "../data";

export const filterJobs = (
  location: string,
  position: string,
  jobs: JobsData[]
) => {
  const locationPattern = new RegExp(location, "i");
  const positionPattern = new RegExp(position, "i");
  const filteredData = jobs.filter((job) => {
    const isLocationMatch = locationPattern.test(job.location);
    const isPositionMatch = positionPattern.test(job.position);

    return isLocationMatch && isPositionMatch;
  });
  return filteredData;
};
