import React, { useEffect, useState, forwardRef } from "react";

const FilmContentFirst = forwardRef((props, ref) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("/data/film.json")
      .then((response) => response.json())
      .then((result) => setFilms(result.FilmContentFirst))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <>
      <div
        ref={ref}
        id="filmContainer"
        className="flex flex-nowrap overflow-x-auto gap-4 scroll-smooth snap-x lg:overflow-x-hidden lg:min-w-full lg:gap-7 relative "
      >
        {films.map((film) => {
          return (
            <div
              key={film.id}
              style={{ backgroundImage: `url(${film.image})` }}
              
              className="bg-cover bg-center rounded min-h-[151px] flex min-w-[300px] justify-between items-end p-4 snap-end cursor-pointer transition duration-300 ease-out-in transform hover:scale-90 "
            >
              <p className="font-bold text-sm leading-[140%] tracking-wide">
                {film.judul}
              </p>
              <p className="font-normal text-xs leading-[140%] tracking-wide">
                <i className="fas fa-star w-3 h-3 mr-1"></i> 4.5/5
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
});
export default FilmContentFirst;
