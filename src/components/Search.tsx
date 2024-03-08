import { FC, useState, ChangeEvent } from "react";
import { JobsData } from "../../data";

interface SearchProps {
  jobs: JobsData;
  filteredJobs: JobsData;
  setFilteredJobs: () => void;
}

export const Search: FC<SearchProps> = ({
  jobs,
  filteredJobs,
  setFilteredJobs,
}) => {
  const [titleQuery, setTitleQuery] = useState<string>("");
  const [locationQuery, setLocationQuery] = useState<string>("");
  const [fullTime, setFullTime] = useState<boolean>(false);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitleQuery(event.target.value);
  };

  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocationQuery(event.target.value);
  };

  const handleFullTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFullTime(event.target.checked);
  };
  // const filterJobs =
  return (
    <div>
      <form>
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
      </form>
    </div>
  );
};
