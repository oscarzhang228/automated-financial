import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Budget from "./pages/Budget";
import Transactions from "./pages/Transactions";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import "./scss/main.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
