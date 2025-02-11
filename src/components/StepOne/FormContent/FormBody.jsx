import FormTitle from "./FormTitle";
import FormOptions from "./FormOptions";
import FormInput from "./FormInput";
import FormButtons from "./FormButtons";

export default function FormBody() {
  return (
    <div className="form-body">
      <FormTitle />
      <div className="line"></div>
      <FormOptions />
      <FormInput />
      <FormButtons />
    </div>
  );
}
