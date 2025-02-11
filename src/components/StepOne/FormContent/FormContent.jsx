import "../../../styles/StepOneStyles/formContent.css";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

export default function FormContent() {
  return (
    <section className="form-content">
      <FormHeader title="ticket selection" step={1} />
      <FormBody />
    </section>
  );
}
