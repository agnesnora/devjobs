import { useState } from "react";
ü;
import { JobsData, jobs } from "../data";
import { Search } from "./components/Search";
import "./App.css";

const App = () => {
  const [filteredJobs, setFilteredJobs] = useState<JobsData>([]);
  console.log(jobs);
  return (
    <>
      <div>Cili</div>
      <Search jobs={jobs} />
    </>
  );
};

export default App;
