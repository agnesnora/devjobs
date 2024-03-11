import { FC, useState, ChangeEvent, FormEvent } from "react";
import { JobsData } from "../../data";
import { filterJobs } from "../utils";

interface SearchProps {
  jobs: JobsData[];
  filteredJobs: JobsData[];
  setFilteredJobs: React.Dispatch<React.SetStateAction<JobsData[]>>;
}

export const Search: FC<SearchProps> = ({
  jobs,
  filteredJobs,
  setFilteredJobs,
}) => {
  const [positionQuery, setPositionQuery] = useState<string>("");
  const [locationQuery, setLocationQuery] = useState<string>("");
  const [fullTime, setFullTime] = useState<boolean>(false);

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
    console.log(filteredJobs);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="input--title"
          onChange={handleTitleChange}
          placeholder="Job title"
        />
        <input
          type="text"
          className="input--location"
          onChange={handleLocationChange}
          placeholder="Location"
        />
        <label>
          <input
            type="checkbox"
            checked={fullTime}
            onChange={handleFullTimeChange}
          />
          Full Time
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
