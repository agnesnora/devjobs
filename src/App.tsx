import { useState, FC, createContext, Dispatch } from "react";

import { JobsData, jobs } from "../data";
import { Search } from "./components/Search";
import { JobList } from "./components/JobList/JobList";
import { Header } from "./components/Header/Header";
import "./App.css";

type ThemeContextProps = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
};
export const ThemeContext = createContext<null | ThemeContextProps>(null);
const App: FC = () => {
  const [filteredJobs, setFilteredJobs] = useState<JobsData[]>(jobs);
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme === "light" ? "light" : "dark"}>
          <Header />
          <Search
            jobs={jobs}
            filteredJobs={filteredJobs}
            setFilteredJobs={setFilteredJobs}
          />
          <JobList filteredJobs={filteredJobs} />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
