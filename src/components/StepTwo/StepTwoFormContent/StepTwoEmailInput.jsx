import "../../../styles/StepTwoStyles/inputSection.css";
import { useContext } from "react";
import { FormDetailsContext } from "../../../context/FormDetailsContext";
import PropTypes from "prop-types";
export default function StepTwoEmailInput({ emailRef }) {
  const {
    state: { emailError: error, email },
    dispatch,
  } = useContext(FormDetailsContext);
  const handleEmailChange = (event) => {
    const {
      target: { value },
    } = event;
    dispatch({ type: "set email", payload: value });
  };
  return (
    <section className="input-section">
      <label htmlFor="email-input">Enter your email *</label>
      <div className="input">
        <img src="envelope.png" alt="email icon" aria-hidden="true" />
        <input
          type="email"
          name="email-input"
          id="email-input"
          placeholder="hello@avioflagos.io"
          ref={emailRef}
          aria-required="true"
          required
          value={email}
          aria-invalid={error ? "true" : "false"}
          onChange={(event) => {
            handleEmailChange(event);
          }}
        />
      </div>
      {error && (
        <p className="errorMessage" aria-live="assertive">
          {error}
        </p>
      )}
    </section>
  );
}

StepTwoEmailInput.propTypes = {
  emailRef: PropTypes.any,
};
