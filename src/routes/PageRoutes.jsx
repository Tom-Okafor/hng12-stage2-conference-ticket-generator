import { Routes, Route } from "react-router-dom";
import Events from "../pages/Events/Events";
import About from "../pages/About/About";
import Tickets from "../pages/Tickets/Tickets";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Events />} />
      <Route path="/about-projecr" element={<About />} />
      <Route path="/tickets" element={<Tickets />} />
    </Routes>
  );
}
