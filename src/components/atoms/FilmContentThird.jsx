import React, { useEffect, useState, forwardRef } from "react";

const FilmContentThird = forwardRef((props, ref) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("/data/film.json")
      .then((response) => response.json())
      .then((result) => setFilms(result.FilmContentThird))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <>
      <div
        ref={ref}
        id="trending"
        className="mt-5 flex flex-nowrap overflow-x-auto gap-4 scroll-smooth snap-center lg:min-w-full lg:gap-7 lg:overflow-x-hidden"
      >
        {films.map((film) => {
          return (
            <div
              key={film.id}
              style={{ backgroundImage: `url(${film.image})` }}
              className="min-w-24 h-36 bg-cover bg-center rounded flex relative lg:min-w-[234px] lg:min-h-[365px]"
            >
              <div className="flex flex-wrap p-[2px] w-[14px] h-[21px] bg-red-500 top-0 right-1 absolute">
                <span className="font-normal text-[6px] leading-[140%]">
                  Top
                </span>
                <span className="font-normal text-[6px] leading-[140%]">
                  10
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
});

export default FilmContentThird;
