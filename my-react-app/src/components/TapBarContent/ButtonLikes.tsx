import HeartIcon from "../../assets/heart-svg.svg?react";

import "./TapBarContent.css";
import { useState } from "react";

function ButtonLikes() {
  const [likesCount, setLikesCount] = useState<number>(28);

  const handleUpLikesCount = () => {
    setLikesCount((prev) => prev + 1);
  };

  return (
    <div className="button-wrapper" onClick={handleUpLikesCount}>
      <HeartIcon />
      <span className="count-wrapper">{likesCount}</span>
    </div>
  );
}

export default ButtonLikes;
