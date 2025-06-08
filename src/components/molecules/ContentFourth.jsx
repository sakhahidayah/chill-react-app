import { useRef } from "react";


import TittleContent from "../atoms/TittleContent";
import BtnSlide from "../atoms/BtnSlide";
import FilmContentFourth from "../atoms/FilmContentFourth";
function ContentFourth() {
  const fourthRef = useRef(null);

  return (
    <>
      <div className="px-6 relative lg:pl-20 lg:py-10">
        <TittleContent tittle="Rilis baru" />
        <BtnSlide containerRef={fourthRef} />
        <FilmContentFourth ref={fourthRef}/>
      </div>
    </>
  );
}

export default ContentFourth;
