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
          price="free"
          name="regular access"
          ticketsLeft="20 left"
          id={1}
          func={() => {
            handleButtonClick(1);
          }}
          clickedId={clickedButtonId}
        />
        <FormOptionButton
          price="$50"
          name="VIP access"
          ticketsLeft="20 left"
          id={2}
          func={() => {
            handleButtonClick(2);
          }}
          clickedId={clickedButtonId}
        />
        <FormOptionButton
          price="$150"
          name="VVIP access"
          ticketsLeft="20 left"
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
