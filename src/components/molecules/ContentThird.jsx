import { useRef } from "react";

import TittleContent from "../atoms/TittleContent";
import BtnSlide from "../atoms/BtnSlide";
import FilmContentThird from "../atoms/FilmContentThird";
function ContentThird() {
  const thirdRef = useRef(null);
  
  return (
    <>
      <div className="px-6 relative mb-5 lg:pl-20 lg:py-10">
        <TittleContent tittle="Film Trending 🔥" />
        <BtnSlide containerRef={thirdRef}/>
        <FilmContentThird ref={thirdRef}/>
      </div>
    </>
  );
}

export default ContentThird;
