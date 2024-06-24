import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutPage from "./aboutPage/page";
import ContactPage from "./contactPage";
import LandingPage from "./landingPage/page";
import SongsPage from "./songsPage";

export default function AppRouter() {
  return (
    <Router>
      <main className="font-sans">
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/songs" element={<SongsPage />} />
          </Route>
          {/* <Route path="*" element={<LandingPage />} />  fazer rota 404*/}
        </Routes>
      </main>
    </Router>
  );
}
