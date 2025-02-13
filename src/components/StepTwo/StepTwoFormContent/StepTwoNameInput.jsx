import "../../../styles/StepTwoStyles/inputSection.css";
import { useContext } from "react";
import { FormDetailsContext } from "../../../context/FormDetailsContext";
export default function StepTwoNameInput() {
  const {
    state: { nameError: error, name },
    dispatch,
  } = useContext(FormDetailsContext);
  const handleNameChange = (event) => {
    const {
      target: { value },
    } = event;
    dispatch({ type: "set name", payload: value });
  };
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
        value={name}
        onChange={(event) => {
          handleNameChange(event);
        }}
      />
      {error && (
        <p className="errorMessage" aria-live="assertive">
          {error}
        </p>
      )}
    </section>
  );
}
