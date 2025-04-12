import { useState } from "react";
import CommentsSVG from "../SVGComponents/CommentsSVG.tsx";
import "./TapBarContent.css";

function ButtonComments() {
  const [commentsCount, setCommentsCount] = useState<number>(7);

  const handleUpCommentsCount = () => {
    setCommentsCount((prev) => prev + 1);
  };

  return (
    <div className="button-wrapper" onClick={handleUpCommentsCount}>
      <CommentsSVG />
      <span className="count-wrapper">{commentsCount}</span>
    </div>
  );
}

export default ButtonComments;
