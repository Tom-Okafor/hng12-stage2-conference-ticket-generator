import "../../../styles/StepTwoStyles/stepTwoFormBody.css";
import StepTwoImageUpload from "./StepTwoImageUpload";
import Line from "../../General/Line";
import StepTwoNameInput from "./StepTwoNameInput";
import StepTwoEmailInput from "./StepTwoEmailInput";
import StepTwoTextArea from "./StepTwoTextArea";
import FormStepButtons from "../../General/FormStepButtons";
import { useContext } from "react";
import { FormDetailsContext } from "../../../context/FormDetailsContext";
import { UseFormValidation } from "../../../hooks/UseFormValidation";
import useNameRef from "../../../refs/useNameRef";
import useEmailRef from "../../../refs/useEmailRef";
import useImageRef from "../../../refs/useImageRef";

export default function StepTwoFormBody() {
  const {
    state: { imageLink },
    dispatch,
  } = useContext(FormDetailsContext);
  const { isFormValid, isEmailValid, isFileValid, isNameValid } =
    UseFormValidation();
  const nameRef = useNameRef();
  const emailRef = useEmailRef();
  const imageRef = useImageRef();

  return (
    <div className="step-two-form-body">
      <StepTwoImageUpload imageRef={imageRef} />
      <Line />
      <StepTwoNameInput nameRef={nameRef} />
      <StepTwoEmailInput emailRef={emailRef} />
      <StepTwoTextArea />
      <FormStepButtons
        btnOneText="Back"
        btnTwoText="Get My Ticket"
        clickfunction={() => {
          if (isFormValid) {
            dispatch({ type: "stepIncrement" });
            dispatch({ type: "clear errors" });
            dispatch({ type: "set available tickets" });

            if (imageLink) {
              dispatch({ type: "add ticket" });
            }
          } else {
            if (!isEmailValid) {
              dispatch({
                type: "set email error",
                payload: "Please, enter a valid email.",
              });
              emailRef.current.focus();
            } else {
              dispatch({ type: "clear email error" });
            }
            if (!isNameValid) {
              dispatch({
                type: "set name error",
                payload: "Please, enter a valid name.",
              });
             nameRef.current.focus();
            } else {
              dispatch({ type: "clear name error" });
            }

            if (!isFileValid) {
              dispatch({
                type: "set image error",
                payload: "Please, upload a file.",
              });
             imageRef.current.focus();
            } else {
              dispatch({ type: "clear image error" });
            }
          }
        }}
        btnOneClick={() => {
          dispatch({ type: "decrease step" });
        }}
      />
    </div>
  );
}
