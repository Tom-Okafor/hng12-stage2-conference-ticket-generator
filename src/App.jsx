import { useState } from "react";
import StepOne from "./components/StepOne/StepOne";

function App() {
  const [currentStep, setStep] = useState(1);

  return <main>{currentStep === 1 && <StepOne />}</main>;
}

export default App;
