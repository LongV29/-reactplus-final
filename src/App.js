import "./App.css";
import Home from "./components/homePage";
import Register from "./components/register";
import Login from "./components/login/index";
import DashBoard from "./components/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dash" element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
