import { useState, useEffect, useRef, ReactNode } from "react";
import "./styles.scss";

type TapBarProps = {
  children: ReactNode;
};

const TapBar = ({ children }: TapBarProps) => {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const scrollStartY = useRef(window.scrollY);
  const appearTimeout = useRef<number | null>(null);
  const isScrollingDown = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollDown = currentY > lastScrollY.current;
      isScrollingDown.current = scrollDown;

      // Если направление изменилось или прошло больше 1 секунды - сбрасываем начальную позицию
      if (scrollDown !== isScrollingDown.current) {
        scrollStartY.current = currentY;
      }

      const scrollDistance = currentY - scrollStartY.current;

      // Прокрутка вниз более чем на 200px - скрываем
      if (scrollDown && scrollDistance >= 200) {
        setHidden(true);
      }
      // Прокрутка вверх - показываем
      else if (!scrollDown) {
        setHidden(false);
      }

      // Очищаем предыдущий таймер
      if (appearTimeout.current) {
        clearTimeout(appearTimeout.current);
      }

      // Устанавливаем новый таймер для появления
      appearTimeout.current = setTimeout(() => {
        setHidden(false);
        // После появления сбрасываем начальную позицию для нового отсчета
        scrollStartY.current = window.scrollY;
      }, 1000);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (appearTimeout.current) {
        clearTimeout(appearTimeout.current);
      }
    };
  }, []);

  return <div className={`tapbar ${hidden ? "hidden" : ""}`}>{children}</div>;
};

export default TapBar;
