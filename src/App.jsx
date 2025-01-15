import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Addperson from "./components/Addperson";
import Retrive from "./components/Retrive";
import './App.css';
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Addperson />} />
          <Route path="/retrive" element={<Retrive />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
