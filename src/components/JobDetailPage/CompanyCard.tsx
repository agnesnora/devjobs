import { FC } from "react";
import { JobsData } from "../../../data";
import { NavLink } from "react-router-dom";
interface CompanyCardProps {
  filteredJob?: JobsData;
}

export const CompanyCard: FC<CompanyCardProps> = ({ filteredJob }) => {
  if (!filteredJob) {
    return null;
  }
  console.log(filteredJob.company.toLowerCase());
  return (
    <div className="company--card--container">
      <div
        className="company--logo"
        style={{
          backgroundImage: `url(/assets/logos/${filteredJob.company.toLowerCase()}.svg`,

          backgroundColor: filteredJob.logoBackground,
        }}
      ></div>
      <div className="company--card--main">
        <h1>{filteredJob.company}</h1>
        <NavLink
          to={filteredJob.website}
        >{`${filteredJob.company.toLowerCase()}.com`}</NavLink>
        <NavLink className="button--navlink" to={filteredJob.website}>
          {" "}
          Company Site
        </NavLink>
      </div>
    </div>
  );
};
