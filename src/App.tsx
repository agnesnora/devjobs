import { useState } from "react";

import { JobsData, jobs } from "../data";
import { Search } from "./components/Search";
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
    </>
  );
};

export default App;
