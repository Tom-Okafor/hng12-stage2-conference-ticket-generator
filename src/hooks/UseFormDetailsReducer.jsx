import { initialState } from "../constants";
import { formDetailsReducer } from "../utils/formDetailsReducer";
import { useReducer } from "react";

export default function UseFormDetailsReducer() {
  const [state, dispatch] = useReducer(formDetailsReducer, initialState);
  return [state, dispatch];
}
