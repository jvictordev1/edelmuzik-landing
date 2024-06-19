import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./landingPage/page";

export default function AppRouter() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/abc" element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
}
