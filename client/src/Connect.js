import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/main-page/MainPage";
import Footer from "./components/footer/Footer";
import SchedulePage from "./components/schedule-page/SchedulePage";

function Connect() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/schedule" element={<SchedulePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Connect;
