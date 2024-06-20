import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutPage from "./aboutPage/page";
import ContactPage from "./contactPage";
import LandingPage from "./landingPage/page";
import SongsPage from "./songsPage";

export default function AppRouter() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/songs" element={<SongsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
}
