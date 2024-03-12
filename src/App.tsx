import { useState } from "react";

import { JobsData, jobs } from "../data";
import { Search } from "./components/Search";
// import { JobCard } from "./components/JobCard.tsx/JobCard";
import { JobList } from "./components/JobList/JobList";
import "./App.css";

const App = () => {
  const [filteredJobs, setFilteredJobs] = useState<JobsData[]>(jobs);

  return (
    <>
      <div>Cili</div>
      <Search
        jobs={jobs}
        filteredJobs={filteredJobs}
        setFilteredJobs={setFilteredJobs}
      />
      <JobList filteredJobs={filteredJobs} />
    </>
  );
};

export default App;
