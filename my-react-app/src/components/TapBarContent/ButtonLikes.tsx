import { useState } from "react";
import HeartSVG from "../SVGComponents/HeartSVG.tsx";
import "./styles.scss";

function ButtonLikes() {
  const [likesCount, setLikesCount] = useState<number>(28);

  const handleUpLikesCount = () => {
    setLikesCount((prev) => prev + 1);
  };

  return (
    <div className="button-wrapper" onClick={handleUpLikesCount}>
      <HeartSVG />
      <span className="count-wrapper">{likesCount}</span>
    </div>
  );
}

export default ButtonLikes;
