import { useState } from "react";

import { JobsData, jobs } from "../data";
import { Search } from "./components/Search";
import { JobCard } from "./components/JobCard.tsx/JobCard";
import "./App.css";

const App = () => {
  const [filteredJobs, setFilteredJobs] = useState<JobsData[]>([]);

  return (
    <>
      <div>Cili</div>
      <Search
        jobs={jobs}
        filteredJobs={filteredJobs}
        setFilteredJobs={setFilteredJobs}
      />
      <JobCard filteredJobs={jobs} />
    </>
  );
};

export default App;
