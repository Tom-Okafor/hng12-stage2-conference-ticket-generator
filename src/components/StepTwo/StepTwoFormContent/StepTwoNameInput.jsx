import '../../../styles/StepTwoStyles/inputSection.css'

export default function StepTwoNameInput() {
  return (
    <section className="name-input-holder input-section">
      <label htmlFor="name-input" id="text-label">Enter your name</label>
      <input type="text" name="name-input" id="name-input" className="input" required aria-labelledby="text-label"/>
    </section>
  );
}
