import { useRef } from "react";

import TittleContent from "../atoms/TittleContent";
import BtnSlide from "../atoms/BtnSlide";
import FilmContentSecond from "../atoms/FilmContentSecond";

function ContentSecond() {
  const secondRef = useRef(null)
  return (
    <>
      <div className="px-6 min-w-80 lg:min-w-[1024px] relative lg:pl-20 lg:py-10">
        <TittleContent tittle="Top Rating Film dan Series Hari ini" />
        <BtnSlide containerRef={secondRef} />
        <FilmContentSecond ref={secondRef}/>
      </div>
    </>
  );
}

export default ContentSecond;
