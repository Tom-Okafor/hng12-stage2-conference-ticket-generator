import "../../../styles/StepTwoStyles/inputSection.css";
import { useContext } from "react";
import { FormDetailsContext } from "../../../context/FormDetailsContext";
import PropTypes from "prop-types";
export default function StepTwoNameInput({ nameRef }) {
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
        ref={nameRef}
        aria-required="true"
        aria-labelledby="text-label"
        aria-invalid={error ? "true" : "false"}
        value={name}
        onChange={(event) => {
          handleNameChange(event);
        }}
      />
      {error && (
        <p className="errorMessage" aria-live="assertive" role="alert">
          {error}
        </p>
      )}
    </section>
  );
}

StepTwoNameInput.propTypes = {
  nameRef: PropTypes.any,
};
