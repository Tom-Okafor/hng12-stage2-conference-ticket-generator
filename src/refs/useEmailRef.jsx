import { useRef } from "react";

export default function useEmailRef() {
  const emailRef = useRef(null);

  return emailRef;
}
