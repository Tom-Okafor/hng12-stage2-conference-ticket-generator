import "../../../styles/StepTwoStyles/StepTwoFormBody.css";
import StepTwoImageUpload from "./StepTwoImageUpload";
import Line from "../../General/Line";

export default function StepTwoFormBody() {
  return (
    <div className="step-two-form-body">
      <StepTwoImageUpload />
      <Line />
    </div>
  );
}
