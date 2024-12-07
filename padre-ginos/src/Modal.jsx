import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  // use a ref to keep track of the same element between renders
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // we need to clean up the div we made after the component unmounts
    return () => modalRoot.removeChild(elRef.current);
  }, []);
  return createPortal(<div>{children}</div>, elRef.current);
}
