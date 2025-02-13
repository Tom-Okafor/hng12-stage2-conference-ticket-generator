import "../../styles/StepThreeStyles/StepThreeContentBox.css";
import FormStepButtons from "../General/FormStepButtons";
import StepThreeTicketContainer from "./StepThreeTicketContainer";
import { useContext } from "react";
import { FormDetailsContext } from "../../context/FormDetailsContext";

export default function StepThreeContentBox() {
  const { dispatch } = useContext(FormDetailsContext);
  return (
    <div className="step-three-content-box">
      <StepThreeTicketContainer />
      <FormStepButtons
        btnOneText="Book Another Ticket"
        btnTwoText="Download Ticket"
        btnOneClick={() => {
          dispatch({ type: "" });
        }}
        clickfunction={() => {}}
      />
    </div>
  );
}
