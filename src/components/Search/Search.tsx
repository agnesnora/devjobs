import { FC, useState, ChangeEvent, FormEvent, useContext } from "react";
import { JobsData } from "../../../data";
import { filterJobs } from "../../utils";
import "./Search.style.css";
import { ThemeContext } from "../../App";
import { IoSearch } from "react-icons/io5";

import { FilterPopUp } from "./FilterPopUp";

interface SearchProps {
  jobs: JobsData[];
  filteredJobs: JobsData[];
  setFilteredJobs: React.Dispatch<React.SetStateAction<JobsData[]>>;
}

export const Search: FC<SearchProps> = ({
  jobs,

  setFilteredJobs,
}) => {
  const [positionQuery, setPositionQuery] = useState<string>("");
  const [locationQuery, setLocationQuery] = useState<string>("");
  const [fullTime, setFullTime] = useState<boolean>(false);
  const [isPopUpOn, setIsPopUpOn] = useState<boolean>(false);
  // const [isSearchOnTop, setIsSearchOnTop] = useState<boolean>(false);

  const themeContext = useContext(ThemeContext);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPositionQuery(event.target.value);
  };

  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocationQuery(event.target.value);
  };

  const handleFullTimeChange = () => {
    setFullTime(!fullTime);
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filteredData = filterJobs(
      locationQuery,
      positionQuery,
      fullTime,
      jobs
    );
    setFilteredJobs(filteredData);
    isPopUpOn ? setIsPopUpOn(false) : null;

    setPositionQuery("");
  };
  const handleFilter = () => {
    setIsPopUpOn(true);
  };
  return (
    <>
      {(themeContext?.windowWidth ?? 769) < 768 ? (
        <div className="container">
          <div className={`overlay ${isPopUpOn ? "active" : ""}`}></div>{" "}
          <form
            onSubmit={handleSearch}
            className={`form--container
               form--container--${
                 themeContext?.theme === "light" ? "light" : "dark"
               }`}
          >
            <input
              type="text"
              className="input--title"
              onChange={handleTitleChange}
              placeholder="Filter by title"
            />
            <div className="icon--flex">
              <img
                onClick={handleFilter}
                src="./assets/mobile/icon-filter.svg"
                style={{ width: "20px", height: "20px" }}
              />

              <button type="submit">
                <IoSearch />
              </button>
            </div>
            {isPopUpOn ? (
              <FilterPopUp
                fullTime={fullTime}
                handleFullTimeChange={handleFullTimeChange}
                handleLocationChange={handleLocationChange}
              />
            ) : null}
          </form>
        </div>
      ) : (
        <>
          {" "}
          <form
            onSubmit={handleSearch}
            className={`form--container form--container--${
              themeContext?.theme === "light" ? "light" : "dark"
            }`}
          >
            <div className="icon--input--wrapper">
              <img src="./assets/desktop/icon-search.svg" />{" "}
              <input
                type="text"
                className="input--title"
                onChange={handleTitleChange}
                placeholder="Filter by title..."
              />
            </div>
            <div className="icon--input--wrapper">
              <img src="./assets/desktop/icon-location.svg" />{" "}
              <input
                type="text"
                className="input--location"
                onChange={handleLocationChange}
                placeholder="Filter by location..."
              />
            </div>

            <div className="checkbox--label--wrapper">
              <input
                type="checkbox"
                checked={fullTime}
                onChange={handleFullTimeChange}
                className="checkbox"
              />{" "}
              <label
                style={{
                  color: themeContext?.theme === "dark" ? "#979797" : "#19202D",
                }}
              >
                Full Time Only
              </label>{" "}
            </div>

            <button type="submit">Search</button>
          </form>
        </>
      )}
    </>
  );
};
