import { createPortal } from "react-dom";

function CopiedLinkNotification() {
  return createPortal(
    <div className="copied-notification">
      Ссылка скопирована в буфер обмена!
    </div>,
    document.getElementById("notification")!,
  );
}

export default CopiedLinkNotification;
