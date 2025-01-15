import "./Navbar.css"
import { useNavigate } from "react-router-dom";
  
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
    <div className="navbar">
        <h1>Directory App</h1>
      </div>
      <div className="navigators">
        <button className="navigator-btn" onClick={() => navigate("/")}>
          Add New Person
        </button>
        <button className="navigator-btn" onClick={() => navigate("/retrive")}>
          Retrieve Info
        </button>
      </div>
      </>
  )
}

export default Navbar

