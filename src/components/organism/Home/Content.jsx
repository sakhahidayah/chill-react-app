import ContentFirst from "../../molecules/ContentFirst";
import ContentSecond from "../../molecules/ContentSecond";
import ContentThird from "../../molecules/ContentThird";
import ContentFourth from "../../molecules/ContentFourth";
function Content() {
  return (
    <>
      <section className="bg-[#181a1c] text-white overflow-hidden relative">
        <ContentFirst />
        <ContentSecond />
        <ContentThird />
        <ContentFourth />
      </section>
    </>
  );
}

export default Content;
