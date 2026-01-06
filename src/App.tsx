// import Route from "@routes/index";
import { Routes, Route } from "react-router-dom";
import HomePage from "@pages/HomePage";
import "./App.css";
import Projects from "@pages/Projects";
import ProjectDetail from "@pages/ProjectDetail";

function App() {
  return (
    <>
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
