import "../../styles/StepOneStyles/general.css";
import Header from "../General/Header";
import StepTwoFormContent from "./StepTwoFormContent/StepTwoFormContent";
export default function StepTwo() {
  return (
    <section className="step-two">
      <Header />
      <StepTwoFormContent />
    </section>
  );
}
