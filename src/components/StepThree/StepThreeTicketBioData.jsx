import "../../styles/StepThreeStyles/StepThreeTicketBioData.css";
import { useContext } from "react";
import { StepThreeTicketContext } from "../../context/stepThreeTicketContext";

export default function StepThreeTicketBioData() {
  const ticketData = useContext(StepThreeTicketContext);

  return (
    <div className="bio-data">
      <div className="ticket-data-container">
        <div className="ticket-data">
          <p className="caption">Enter your name</p>
          <p className="data">{ticketData.name}</p>
        </div>
        <div className="ticket-data">
          <p className="caption">Enter your email</p>
          <p className="data">{ticketData.email}</p>
        </div>
        <div className="ticket-data">
          <p className="caption">Ticket Type:</p>
          <p className="data-type">{ticketData.ticketType}</p>
        </div>
        <div className="ticket-data">
          <p className="caption">Ticket for:</p>
          <p className="data-type">{ticketData.ticketQuantity}</p>
        </div>
        <div className="ticket-data">
          <p className="caption">Special request?</p>
          <p className="data-type">
            {ticketData.specialRequest ? ticketData.specialRequest : "Nil"}
          </p>
        </div>
      </div>
    </div>
  );
}
