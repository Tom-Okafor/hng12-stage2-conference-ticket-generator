import "../../styles/StepThreeStyles/StepThreeTicketImage.css";
import { useContext } from "react";
import { StepThreeTicketContext } from "../../context/stepThreeTicketContext";

export default function StepThreeTicketImage() {
  const ticketData = useContext(StepThreeTicketContext);
  return (
    <img
      src={ticketData.imageLink}
      alt="Profile Image"
      className="ticket-image"
    />
  );
}
