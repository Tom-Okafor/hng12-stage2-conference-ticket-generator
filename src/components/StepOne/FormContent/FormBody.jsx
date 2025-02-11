import FormTitle from "./FormTitle";
import FormOptions from "./FormOptions";
import FormInput from "./FormInput";
import FormStepButtons from "../../General/FormStepButtons";
import Line from "../../General/Line";

export default function FormBody() {
  return (
    <div className="form-body" aria-label="Ticket Selection">
      <FormTitle />
      <Line />
      <FormOptions />
      <FormInput />
      <FormStepButtons btnOneText="Cancel" btnTwoText="Next" />
    </div>
  );
}
