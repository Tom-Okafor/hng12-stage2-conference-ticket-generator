import "../../../styles/StepTwoStyles/inputSection.css";
import { useContext } from "react";
import { FormDetailsContext } from "../../../context/FormDetailsContext";
export default function StepTwoEmailInput() {
  const {
    state: { emailError: error },
    dispatch,
  } = useContext(FormDetailsContext);
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
          aria-required="true"
          required
          aria-invalid={error ? "true" : "false"}
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
