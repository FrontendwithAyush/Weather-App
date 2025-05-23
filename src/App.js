import "./App.css";
import Current from "./components/Current";
import Day from "./components/Day";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Seven from "./components/Seven";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [city, setCity] = useState("nagpur");

  const isLanding = location.pathname === "/";

  return (
    <>
      <div className="app-wrapper">
        {!isLanding && <Navbar />}
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Search setProgress={setProgress} setCity={setCity} />}
          />
          <Route
            exact
            path="/current"
            element={<Current setProgress={setProgress} city={city} />}
          />
          <Route
            exact
            path="/hourly"
            element={<Day setProgress={setProgress} city={city} />}
          />
          <Route
            exact
            path="/daily"
            element={<Seven setProgress={setProgress} city={city} />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
