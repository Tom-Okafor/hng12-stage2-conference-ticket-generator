import "../../styles/StepThreeStyles/StepThreeBody.css";
import FormHeader from "../StepOne/FormContent/FormHeader";
import StepThreeContent from "./StepThreeContent";

export default function StepThreeBody() {
  return (
    <section className="step-three-body">
      <FormHeader title="Ready" step={3} />
      <StepThreeContent />
    </section>
  );
}
