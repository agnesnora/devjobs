import { useState, FC, createContext, Dispatch, useEffect } from "react";

import { JobsData, jobs } from "../data";
import { Search } from "./components/Search/Search";
import { JobList } from "./components/JobList/JobList";
import { Header } from "./components/Header/Header";
import "./App.css";

type ThemeContextProps = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
  windowWidth: number;
  screen: { mobile: number; desktop: number };
};
export const ThemeContext = createContext<null | ThemeContextProps>(null);
const App: FC = () => {
  const [filteredJobs, setFilteredJobs] = useState<JobsData[]>(jobs);
  const [theme, setTheme] = useState("light");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const screen: { mobile: number; desktop: number } = {
    mobile: 768,
    desktop: 1240,
  };
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme, windowWidth, screen }}>
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
