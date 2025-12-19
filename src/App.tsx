import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Landing from "./pages/Landing";
import NewInterview from "./pages/NewInterview";
import InterviewRoom from "./pages/InterviewRoom";
import Coding from "./pages/Coding";
import Resume from "./pages/Resume";
import History from "./pages/History";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/new" element={<NewInterview />} />
        <Route path="/room/:id" element={<InterviewRoom />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
