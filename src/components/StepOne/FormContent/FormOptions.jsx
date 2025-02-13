import { useState } from "react";
import FormOptionButton from "./FormOptionButton";
import { useContext } from "react";
import { FormDetailsContext } from "../../../context/FormDetailsContext";

export default function FormOptions() {
  const {
    state: { clickedButtonId },
    dispatch,
  } = useContext(FormDetailsContext);

  return (
    <div className="form-options">
      <p className="form-options-title">select ticket type:</p>
      <div className="form-options-body">
        <FormOptionButton
          price="free"
          name="regular access"
          ticketsLeft="20/52"
          id={1}
          func={() => {
            dispatch({ type: "set clicked button id", payload: 1 });
            dispatch({ type: "select ticket type", payload: "Regular" });
          }}
          clickedId={clickedButtonId}
        />
        <FormOptionButton
          price="$50"
          name="VIP access"
          ticketsLeft="20/52"
          id={2}
          func={() => {
            dispatch({ type: "set clicked button id", payload: 2 });
            dispatch({
              type: "select ticket type",
              payload: "VIP",
            });
          }}
          clickedId={clickedButtonId}
        />
        <FormOptionButton
          price="$150"
          name="VVIP access"
          ticketsLeft="20/52"
          id={3}
          func={() => {
            dispatch({ type: "set clicked button id", payload: 3 });
            dispatch({
              type: "select ticket type",
              payload: "VVIP",
            });
          }}
          clickedId={clickedButtonId}
        />
      </div>
    </div>
  );
}
