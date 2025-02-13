import "../../../styles/StepTwoStyles/inputSection.css";
import { useContext } from "react";
import { FormDetailsContext } from "../../../context/FormDetailsContext";
export default function StepTwoNameInput() {
  const {
    state: { nameError: error },
    dispatch,
  } = useContext(FormDetailsContext);
  return (
    <section className="input-section">
      <label htmlFor="name-input" id="text-label">
        Enter your name
      </label>
      <input
        type="text"
        name="name-input"
        id="name-input"
        className="input"
        required
        aria-required="true"
        aria-labelledby="text-label"
        aria-invalid={error ? "true" : "false"}
      />
      {error && (
        <p className="errorMessage" aria-live="assertive">
          {error}
        </p>
      )}
    </section>
  );
}
