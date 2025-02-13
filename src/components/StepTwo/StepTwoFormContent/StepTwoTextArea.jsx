import { FormDetailsContext } from "../../../context/FormDetailsContext";
import "../../../styles/StepTwoStyles/inputSection.css";
import { useContext } from "react";

export default function StepTwoTextArea() {
  const {
    state: { specialRequest },
    dispatch,
  } = useContext(FormDetailsContext);
  return (
    <section className="text-area-holder input-section">
      <label htmlFor="text-area">Special request?</label>
      <textarea
        name="text-area"
        id="text-area"
        placeholder="Textarea"
        value={specialRequest}
        onChange={(event) => {
          dispatch({ type: "set request", payload: event.target.value });
        }}
      ></textarea>
    </section>
  );
}
