import "../../styles/StepThreeStyles/StepThreeContentBox.css";
import FormStepButtons from "../General/FormStepButtons";
import StepThreeTicketContainer from "./StepThreeTicketContainer";

export default function StepThreeContentBox() {
  return (
    <div className="step-three-content-box">
      <StepThreeTicketContainer />
      <FormStepButtons
        btnOneText="Book Another Ticket"
        btnTwoText="Download Ticket"
      />
    </div>
  );
}
