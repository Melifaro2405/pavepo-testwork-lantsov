import { useRef, useState } from "react";
import CopiedLinkNotification from "../CopiedLinkNotification/CopiedLinkNotification.tsx";
import ShareLinkSVG from "../SVGComponents/ShareLinkSVG.tsx";
import "./styles.scss";

function ButtonShareLink() {
  const [showCopiedNotification, setShowCopiedNotification] = useState(false);
  const notificationTimeout = useRef<number | null>(null);

  const handleSharePage = async () => {
    try {
      // Пробуем использовать Web Share API если доступно
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          text: "Посмотрите эту страницу",
          url: window.location.href,
        });
      } else {
        // Если не поддерживается - копируем в буфер обмена
        await navigator.clipboard.writeText(window.location.href);
        showNotification();
      }
    } catch (err) {
      // Если пользователь отменил шаринг, тоже копируем в буфер
      await navigator.clipboard.writeText(window.location.href);
      console.error(err);
      showNotification();
    }
  };

  const showNotification = () => {
    setShowCopiedNotification(true);
    if (notificationTimeout.current) {
      clearTimeout(notificationTimeout.current);
    }
    notificationTimeout.current = setTimeout(() => {
      setShowCopiedNotification(false);
    }, 2000);
  };

  return (
    <div className="button-wrapper" onClick={handleSharePage}>
      <ShareLinkSVG />
      {showCopiedNotification && <CopiedLinkNotification />}
    </div>
  );
}

export default ButtonShareLink;
