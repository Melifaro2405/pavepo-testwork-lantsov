import PageUpSVG from "../SVGComponents/PageUpSVG.tsx";
import "./styles.scss";

function ButtonShareLink() {
  const handleScrollToStartPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="button-wrapper" onClick={handleScrollToStartPage}>
      <PageUpSVG />
    </div>
  );
}

export default ButtonShareLink;
