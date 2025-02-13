import FormOptionButton from "./FormOptionButton";
import { useContext, useEffect, useRef } from "react";
import { FormDetailsContext } from "../../../context/FormDetailsContext";

export default function FormOptions() {
  const {
    state: {
      clickedButtonId,
      VVIPTicketsLeft,
      VIPTicketsLeft,
      regularTicketsLeft,
    },
    dispatch,
  } = useContext(FormDetailsContext);

  const regularRef = useRef(null);
  const VIPRef = useRef(null);
  const VVIPRef = useRef(null);

  useEffect(() => {
    if (!regularTicketsLeft) regularRef.current.disabled = true;
    if (!VIPTicketsLeft) VIPRef.current.disabled = true;
    if (!VVIPTicketsLeft) VVIPRef.current.disabled = true;
  }, [regularTicketsLeft, VIPTicketsLeft, VVIPTicketsLeft]);

  return (
    <div className="form-options">
      <p className="form-options-title">select ticket type:</p>
      <div className="form-options-body">
        <FormOptionButton
          price="free"
          name="regular access"
          ticketsLeft={`${regularTicketsLeft}/52`}
          id={1}
          func={() => {
            dispatch({ type: "set clicked button id", payload: 1 });
            dispatch({ type: "select ticket type", payload: "Regular" });
          }}
          clickedId={clickedButtonId}
          ref={regularRef}
        />
        <FormOptionButton
          price="$50"
          name="VIP access"
          ticketsLeft={`${VIPTicketsLeft}/52`}
          id={2}
          func={() => {
            dispatch({ type: "set clicked button id", payload: 2 });
            dispatch({
              type: "select ticket type",
              payload: "VIP",
            });
          }}
          clickedId={clickedButtonId}
          ref={VIPRef}
        />
        <FormOptionButton
          price="$150"
          name="VVIP access"
          ticketsLeft={`${VVIPTicketsLeft}/52`}
          id={3}
          func={() => {
            dispatch({ type: "set clicked button id", payload: 3 });
            dispatch({
              type: "select ticket type",
              payload: "VVIP",
            });
          }}
          clickedId={clickedButtonId}
          ref={VVIPRef}
        />
      </div>
    </div>
  );
}
