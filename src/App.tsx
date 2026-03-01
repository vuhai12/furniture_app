import { Routes, Route } from "react-router-dom";
import ScrollHandler from "@components/ScrollHandler";
import { Suspense, lazy } from "react";
import LoadingSpinner from "@components/LoadingSpinner";
import "./App.css";

const HomePage = lazy(() => import("@pages/HomePage"));
const Projects = lazy(() => import("@pages/Projects"));
const ProjectDetail = lazy(() => import("@pages/ProjectDetail"));

function App() {
  return (
    <>
      <ScrollHandler />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:categorySlug" element={<Projects />} />
          <Route
            path="/projects/:categorySlug/:projectId"
            element={<ProjectDetail />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
