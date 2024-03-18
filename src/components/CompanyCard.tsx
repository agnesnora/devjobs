import { FC } from "react";
import { JobsData } from "../../data";
interface CompanyCardProps {
  filteredJob?: JobsData;
}

export const CompanyCard: FC<CompanyCardProps> = ({ filteredJob }) => {
  if (!filteredJob) {
    return null;
  }
  return (
    <div className="company--card--container">
      <div
        className="company--logo"
        style={{
          backgroundImage: `url(${filteredJob.logo})`,
          backgroundColor: filteredJob.logoBackground,
        }}
      ></div>
      <h1>{filteredJob.company}</h1>
      <a>{filteredJob.website}</a>
      <a href={filteredJob.website}> Company site</a>
    </div>
  );
};
