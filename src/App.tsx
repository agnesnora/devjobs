import { useState, FC, createContext, Dispatch, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JobsData, jobs } from "../data";

import { JobList } from "./components/JobList/JobList";
import { JobDetailPage } from "./components/JobDetailPage/JobDetailPage";

import "./App.css";
import { MainLayout } from "./components/Layouts/MainLayout";

type ThemeContextProps = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
  isPopUpOn: boolean;
  setIsPopUpOn: Dispatch<React.SetStateAction<boolean>>;
  windowWidth: number;
};
export const ThemeContext = createContext<null | ThemeContextProps>(null);
const App: FC = () => {
  const [filteredJobs, setFilteredJobs] = useState<JobsData[]>(jobs);
  const [theme, setTheme] = useState("light");
  const [isPopUpOn, setIsPopUpOn] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

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
      <div className={theme === "light" ? "light" : "dark"}>
        <BrowserRouter>
          <ThemeContext.Provider
            value={{
              theme,
              setTheme,
              windowWidth,

              setIsPopUpOn,
              isPopUpOn,
            }}
          >
            <Routes>
              <Route element={<MainLayout />}>
                <Route
                  path="/"
                  element={
                    <JobList
                      jobs={jobs}
                      filteredJobs={filteredJobs}
                      setFilteredJobs={setFilteredJobs}
                    />
                  }
                />
                <Route
                  path="/jobs/:id"
                  element={<JobDetailPage filteredJobs={filteredJobs} />}
                />
              </Route>

              <Route path="/jobs/:id" element={<MainLayout />}>
                <Route
                  element={<JobDetailPage filteredJobs={filteredJobs} />}
                />
              </Route>
            </Routes>
          </ThemeContext.Provider>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
