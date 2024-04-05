import "./App.css";
import "./App25.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfiloPage from "./components/ProfiloPage";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: "#F4F2EE" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profilo" element={<ProfiloPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
