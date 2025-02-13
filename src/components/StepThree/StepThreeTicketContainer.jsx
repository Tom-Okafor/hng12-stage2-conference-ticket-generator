import "../../styles/StepThreeStyles/StepThreeTicketContainer.css";
import StepThreeTicket from "./StepThreeTicket";
import { useContext } from "react";
import { FormDetailsContext } from "../../context/FormDetailsContext";

export default function StepThreeTicketContainer() {
  const { state } = useContext(FormDetailsContext);
  return (
    <div className="step-three-ticket-container">
      <StepThreeTicket ticketData={state} />
    </div>
  );
}
