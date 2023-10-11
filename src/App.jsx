import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import MainNavbar from "./components/Navbar/MAinNAbar";
import Labs from "./components/Labs";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/labs" element={<Labs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
