import "../../styles/StepThreeStyles/StepThreeContentBox.css";
import FormStepButtons from "../General/FormStepButtons";
import StepThreeTicketContainer from "./StepThreeTicketContainer";
import { useContext, useRef } from "react";
import { FormDetailsContext } from "../../context/FormDetailsContext";
import { TicketContext } from "../../context/TicketContext";
import html2canvas from "html2canvas";

export default function StepThreeContentBox() {
  const { dispatch } = useContext(FormDetailsContext);
  const divRef = useRef(null);
  const handleDownload = () => {
    html2canvas(divRef.current, { useCORS: true }).then((canvas) => {
      const Link = document.createElement("a");
      Link.href = canvas.toDataURL("image/png");
      Link.download = "my_ticket.png";
      Link.click();
    });
  };
  return (
    <div className="step-three-content-box">
      <TicketContext.Provider value={divRef}>
        <StepThreeTicketContainer />
      </TicketContext.Provider>
      <FormStepButtons
        btnOneText="Book Another Ticket"
        btnTwoText="Download Ticket"
        btnOneClick={() => {
          dispatch({ type: "reset" });
        }}
        clickfunction={() => {
          handleDownload();
        }}
      />
    </div>
  );
}
