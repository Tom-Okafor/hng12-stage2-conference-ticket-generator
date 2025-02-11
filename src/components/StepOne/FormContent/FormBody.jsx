import FormTitle from "./FormTitle";
import FormOptions from "./FormOptions";
import FormInput from "./FormInput";
import FormStepButtons from "../../General/FormStepButtons";

export default function FormBody() {
  return (
    <div className="form-body" aria-label="Ticket Selection">
      <FormTitle />
      <div className="line"></div>
      <FormOptions />
      <FormInput />
      <FormStepButtons btnOneText="Cancel" btnTwoText="Next" />
    </div>
  );
}
