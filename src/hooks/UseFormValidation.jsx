import { useContext } from "react";
import { FormDetailsContext } from "../context/FormDetailsContext";
import { validateEmail } from "../utils/validateEmailInput";
import { validateFile } from "../utils/validateFileInput";
import { validateName } from "../utils/validateNameInput";

export const UseFormValidation = () => {
  const {
    state: { name, email, imageLink },
  } = useContext(FormDetailsContext);
  let isFormValid = true;
  let isEmailValid = true;
  let isNameValid = true;
  let isFileValid = true;
  if (!validateEmail(email)) {
    isFormValid = false;
    isEmailValid = false;
  }
  if (!validateName(name)) {
    isFormValid = false;
    isNameValid = false;
  }
  if (!validateFile(imageLink)) {
    isFormValid = false;
    isFileValid = false;
  }
  return { isFormValid, isEmailValid, isNameValid, isFileValid };
};
