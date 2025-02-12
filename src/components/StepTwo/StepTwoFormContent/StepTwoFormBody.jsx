import "../../../styles/StepTwoStyles/StepTwoFormBody.css";
import StepTwoImageUpload from "./StepTwoImageUpload";
import Line from "../../General/Line";
import StepTwoNameInput from "./StepTwoNameInput";
import StepTwoEmailInput from "./StepTwoEmailInput";
import StepTwoTextArea from "./StepTwoTextArea";
import FormStepButtons from "../../General/FormStepButtons";

export default function StepTwoFormBody() {
  return (
    <div className="step-two-form-body">
      <StepTwoImageUpload />
      <Line />
      <StepTwoNameInput />
      <StepTwoEmailInput />
      <StepTwoTextArea />
      <FormStepButtons btnOneText="Back" btnTwoText="Get My Ticket" />
    </div>
  );
}
