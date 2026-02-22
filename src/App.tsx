import { Routes, Route } from "react-router-dom";
import HomePage from "@pages/HomePage";
import Projects from "@pages/Projects";
import ProjectDetail from "@pages/ProjectDetail";
import ScrollHandler from "@components/ScrollHandler";
import "./App.css";

function App() {
  return (
    <>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:categorySlug" element={<Projects />} />
        <Route
          path="/projects/:categorySlug/:projectId"
          element={<ProjectDetail />}
        />
      </Routes>
    </>
  );
}

export default App;
