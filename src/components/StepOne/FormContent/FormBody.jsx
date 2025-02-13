import FormTitle from "./FormTitle";
import FormOptions from "./FormOptions";
import FormInput from "./FormInput";
import FormStepButtons from "../../General/FormStepButtons";
import Line from "../../General/Line";
import { useContext } from "react";
import { FormDetailsContext } from "../../../context/FormDetailsContext";
import { useNavigate } from "react-router-dom";

export default function FormBody() {
  const { dispatch } = useContext(FormDetailsContext);
  const navigate = useNavigate();
  return (
    <div className="form-body" aria-label="Ticket Selection">
      <FormTitle />
      <Line />
      <FormOptions />
      <FormInput />
      <FormStepButtons
        btnOneText="Cancel"
        btnTwoText="Next"
        clickfunction={() => {
          dispatch({ type: "stepIncrement" });
          window.scrollY = 0
        }}
        btnOneClick={() => {
          navigate("/tickets");
        }}
      />
    </div>
  );
}
