import "../../styles/StepOneStyles/header.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <img src="logo.png" alt="logo" />
      <div className="menu">
        <NavLink to="/" activeclassname="active">
          Events
        </NavLink>
        <NavLink to="/tickets" activeclassname="active">
          My Tickets
        </NavLink>
        <NavLink to="/about-project" activeclassname="active">
          About Project
        </NavLink>
      </div>
      <button
        onClick={() => {
          navigate("/tickets");
        }}
      >
        <span>My Tickets</span>
        <img src="Line 5.png" alt="line" aria-hidden="true" />
      </button>
    </header>
  );
}
