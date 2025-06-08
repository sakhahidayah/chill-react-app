import { useRef } from "react";

import TittleContent from "../atoms/TittleContent";
import FilmContentFirst from "../atoms/FilmContentFirst";
import BtnSlide from "../atoms/BtnSlide";

function ContentFirst() {
  const firstRef = useRef(null);

  return (
    <div className="py-5 lg:gap-5 px-6 relative lg:pl-20 lg:py-10">
      <TittleContent tittle="Melanjutkan nonton film" />
      <BtnSlide containerRef={firstRef} />
      <FilmContentFirst ref={firstRef} />
    </div>
  );
}

export default ContentFirst;
