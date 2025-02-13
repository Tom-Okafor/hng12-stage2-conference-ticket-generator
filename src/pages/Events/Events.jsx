import StepOne from "../../components/StepOne/StepOne";
import StepTwo from "../../components/StepTwo/StepTwo";
import StepThree from "../../components/StepThree/StepThree";
import { useContext } from "react";
import { FormDetailsContext } from "../../context/FormDetailsContext";
export default function Events() {
  const {
    state: { currentStep },
  } = useContext(FormDetailsContext);
  return (
    <main>
      {currentStep === 1 ? (
        <StepOne />
      ) : currentStep === 2 ? (
        <StepTwo />
      ) : (
        currentStep === 3 && <StepThree />
      )}
    </main>
  );
}
