import React, { useEffect, useState, forwardRef } from "react";

const FilmContentFourth = forwardRef((props, ref) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("/data/film.json")
      .then((response) => response.json())
      .then((result) => setFilms(result.FilmContentFourth))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <>
      <div
        ref={ref}
        id="rilisBaru"
        className="mt-5 flex flex-nowrap overflow-x-auto gap-4 scroll-smooth snap-center lg:min-w-full lg:gap-7 lg:overflow-x-hidden"
      >
        {films.map((film) => {
          return (
            <div
              key={film.id}
              style={{ backgroundImage: `url(${film.image})` }}
              className="min-w-24 h-36 bg-cover bg-center rounded pt-2 pl-2 lg:min-w-[234px] lg:min-h-[365px] transition duration-300 ease-out-in transform hover:scale-90 cursor-pointer"
            >
              <p className="bg-[#0F1E93] rounded-xl w-[55px] h-[14px] px-1 py-0.5 border-[0.5px] font-bold text-[6.74px] leading-[140%] border-[#0F1E93]">
                Episode baru
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
});

export default FilmContentFourth;
