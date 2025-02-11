import "../../styles/StepOneStyles/header.css";

export default function Header() {
  return (
    <header className="header">
      <img src="logo.png" alt="logo" />
      <div className="menu">
        <a href="" className="active">
          Events
        </a>
        <a href="">My Tickets</a>
        <a href="">About Project</a>
      </div>
      <button>
        <span>My Tickets</span>
        <img src="Line 5.png" alt="line" aria-hidden="true" />
      </button>
    </header>
  );
}
