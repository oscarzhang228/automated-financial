import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Budget from "./pages/Budget";
import Transactions from "./pages/Transactions";
import Testing from "./pages/Testing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/api-test" element={<Testing />} />
      </Routes>
    </Router>
  );
}

export default App;
