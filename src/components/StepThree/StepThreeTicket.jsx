import "../../styles/StepThreeStyles/StepThreeTicket.css";
import StepThreeTicketDetails from "./StepThreeTicketDetails";
import StepThreeBarCode from "./StepThreeTicketBarCode";
export default function StepThreeTicket() {
  return <div className="step-three-ticket">
    <StepThreeTicketDetails />
    <StepThreeBarCode />
  </div>;
}
