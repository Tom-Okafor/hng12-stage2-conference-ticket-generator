import "../../../styles/StepTwoStyles/inputSection.css";

export default function StepTwoEmailInput() {
  return (
    <section className="email-input-holder input-section">
      <label htmlFor="email-input">Enter your email *</label>
      <div className="input">
        <img src="envelope.png" alt="email icon" aria-hidden="true" />
        <input type="email" name="email-input" id="email-input" placeholder="hello@avioflagos.io" required />
      </div>
    </section>
  );
}
