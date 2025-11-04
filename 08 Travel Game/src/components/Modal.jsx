import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      if(!modal.open){
        modal.showModal();
      }
    } else {
      if (modal.open){
        modal.close();
      }
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} open={open}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
