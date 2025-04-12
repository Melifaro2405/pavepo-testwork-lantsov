import CommentsIcon from "../../assets/comments-icon.svg?react";
import "./TapBarContent.css";
import { useState } from "react";

function ButtonComments() {
  const [commentsCount, setCommentsCount] = useState<number>(7);

  const handleUpCommentsCount = () => {
    setCommentsCount((prev) => prev + 1);
  };

  return (
    <div className="button-wrapper" onClick={handleUpCommentsCount}>
      <CommentsIcon />
      <span className="count-wrapper">{commentsCount}</span>
    </div>
  );
}

export default ButtonComments;
