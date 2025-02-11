import { useState } from "react";
import FormOptionButton from "./FormOptionButton";

export default function FormOptions() {
  const [clickedButtonId, setClickedButtonId] = useState(null);
  function handleButtonClick(id) {
    setClickedButtonId(id);
  }
  return (
    <div className="form-options">
      <p className="form-options-title">select ticket type:</p>
      <div className="form-options-body">
        <FormOptionButton
          text="regular access"
          id={1}
          func={() => {
            handleButtonClick(1);
          }}
          clickedId={clickedButtonId}
        />
        <FormOptionButton
          text="vip access"
          id={2}
          func={() => {
            handleButtonClick(2);
          }}
          clickedId={clickedButtonId}
        />
        <FormOptionButton
          text="vvip access"
          id={3}
          func={() => {
            handleButtonClick(3);
          }}
          clickedId={clickedButtonId}
        />
      </div>
    </div>
  );
}
