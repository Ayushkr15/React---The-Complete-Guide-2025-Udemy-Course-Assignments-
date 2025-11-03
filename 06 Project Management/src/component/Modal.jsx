import { createPortal } from "react-dom";
import Button from "./Button";

export default function Modal({open,onClose, children , buttonCaption = "Okay"}, ref) {
  const portalRoot =
    typeof document !== "undefined" && document.getElementById("modal-root");
  if (!portalRoot) return null;

  return createPortal(
    <dialog open={!!open} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button type="button" onClick={onClose}>
          {" "}
          {buttonCaption}
        </Button>
      </form>
    </dialog>,
    portalRoot
  );
}
