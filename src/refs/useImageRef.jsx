import { useRef } from "react";

export default function useImageRef() {
  const imageRef = useRef(null);

  return imageRef;
}
