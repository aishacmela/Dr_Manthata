import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Contacts from "./Contacts";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
