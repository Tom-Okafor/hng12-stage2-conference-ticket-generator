import "../../styles/StepThreeStyles/StepThreeTicket.css";
import StepThreeTicketDetails from "./StepThreeTicketDetails";
import StepThreeBarCode from "./StepThreeTicketBarCode";
import { StepThreeTicketContext } from "../../context/stepThreeTicketContext";
import PropTypes from "prop-types";
import { useContext } from "react";
import { TicketContext } from "../../context/TicketContext";

export default function StepThreeTicket({ ticketData }) {
  const divRef = useContext(TicketContext);
  return (
    <div className="step-three-ticket" ref={divRef}>
      <StepThreeTicketContext.Provider value={ticketData}>
        <StepThreeTicketDetails />
      </StepThreeTicketContext.Provider>
      <StepThreeBarCode />
    </div>
  );
}

StepThreeTicket.propTypes = {
  ticketData: PropTypes.object,
};
