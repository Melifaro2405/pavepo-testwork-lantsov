import ButtonShareLink from "./ButtonShareLink.tsx";
import ButtonPageUp from "./ButtonPageUp.tsx";
import ButtonComments from "./ButtonComments.tsx";
import ButtonLikes from "./ButtonLikes.tsx";

function TapBarContent() {
  return (
    <>
      <ButtonShareLink />
      <ButtonPageUp />
      <ButtonComments />
      <ButtonLikes />
    </>
  );
}

export default TapBarContent;
