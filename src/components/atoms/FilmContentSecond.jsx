import React, { useEffect, useState, forwardRef } from "react";
const FilmContentSecond = forwardRef((props, ref) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("/data/film.json")
      .then((response) => response.json())
      .then((result) => setFilms(result.FilmContentSecond))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <>
  
      <div
        ref={ref}
        id="topRating"
        className="mt-5 flex flex-nowrap overflow-x-auto gap-4 scroll-smooth snap-center snap-x lg:min-w-full lg:gap-7 lg:overflow-x-hidden"
      >
        {films.map((film,) => {
          return(
          <div
            key={film.id}
            className={`bg-[url('${film.image}')] min-w-24 h-36 bg-cover bg-center rounded pt-2 pl-2 lg:min-w-[234px] lg:min-h-[365px] snap-end`}
          >
            <p className="bg-[#0F1E93] rounded-xl w-[55px] h-[14px] px-1 py-0.5 border-[0.5px] font-bold text-[6.74px] leading-[140%] border-[#0F1E93]">
              Episode baru
            </p>
          </div>
          )
        })}
      </div>
    </>
  );
});

export default FilmContentSecond;
