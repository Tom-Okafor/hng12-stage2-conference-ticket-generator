import "../../../styles/StepTwoStyles/inputSection.css";

export default function StepTwoTextArea() {
  return (
    <section className="text-area-holder input-section">
      <label htmlFor="text-area">Special request?</label>
      <textarea
        name="text-area"
        id="text-area"
        placeholder="Textarea"
      ></textarea>
    </section>
  );
}
