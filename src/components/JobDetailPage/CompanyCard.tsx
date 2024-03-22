import { FC, useContext } from "react";
import { JobsData } from "../../../data";
import { NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
import { ThemeContext } from "../../App";

interface CompanyCardProps {
  filteredJob?: JobsData;
}

export const CompanyCard: FC<CompanyCardProps> = ({ filteredJob }) => {
  const context = useContext(ThemeContext);
  if (!filteredJob) {
    return null;
  }
  console.log(filteredJob.company.toLowerCase());

  return (
    <div
      className={`company--card--container company--card--container--${
        context?.theme == "light" ? "light" : "dark"
      }`}
    >
      <div
        className="company--logo"
        style={{
          backgroundImage: `url(/assets/logos/${filteredJob.company.toLowerCase()}.svg`,

          backgroundColor: filteredJob.logoBackground,
        }}
      ></div>
      <div className="company--card--main">
        <div className="company--card--main--flex">
          <h1>{filteredJob.company}</h1>

          <NavLink
            to={filteredJob.website}
          >{`${filteredJob.company.toLowerCase()}.com`}</NavLink>
        </div>

        <Button className="button--navlink" path={filteredJob.website}>
          Company Site
        </Button>
        {/* <NavLink className="button--navlink" to={filteredJob.website}>
          {" "}
          Company Site
        </NavLink> */}
      </div>
    </div>
  );
};
