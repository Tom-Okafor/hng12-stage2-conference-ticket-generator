import "../../styles/StepThreeStyles/StepThreeTicket.css";
import StepThreeTicketDetails from "./StepThreeTicketDetails";
import StepThreeBarCode from "./StepThreeTicketBarCode";
import {StepThreeTicketContext} from "../../context/stepThreeTicketContext";
import PropTypes from "prop-types";

export default function StepThreeTicket({ ticketData }) {
  return (
    <div className="step-three-ticket">
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
