import PageUpIcon from "../../assets/page-up-icon.svg?react";
import "./TapBarContent.css";

function ButtonShareLink() {
  const handleScrollToStartPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="button-wrapper" onClick={handleScrollToStartPage}>
      <PageUpIcon />
    </div>
  );
}

export default ButtonShareLink;
