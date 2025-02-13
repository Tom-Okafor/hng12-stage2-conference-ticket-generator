import { useRef } from "react";

export default function useNameRef() {
  const nameRef = useRef(null);

  return nameRef;
}
