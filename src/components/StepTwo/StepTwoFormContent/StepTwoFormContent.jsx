import FormHeader from "../../StepOne/FormContent/FormHeader";
import "../../../styles/StepTwoStyles/stepTwoFormContent.css";
import StepTwoFormBody from "./StepTwoFormBody";

export default function StepTwoFormContent() {
  return (
    <section className="stepTwoFormContent" role="alert">
      <FormHeader title="Attendee Details" step={2} />
      <StepTwoFormBody />
    </section>
  );
}
