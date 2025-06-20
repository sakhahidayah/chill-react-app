import React, { useEffect, useState, forwardRef } from "react";
import Swal from "sweetalert2";
const FilmContentFirst = forwardRef((props, ref) => {
  const [films, setFilms] = useState([]);
  const [details, setDetails] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    fetch("/data/film.json")
      .then((response) => response.json())
      .then((result) => {
        setFilms(result.FilmContentFirst);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  
  return (
    <>
      <div
        onClick={() => setDetails(!details)}
        ref={ref}
        id="filmContainer"
        className="flex flex-nowrap overflow-x-auto gap-4 scroll-smooth snap-x lg:overflow-x-hidden lg:min-w-full lg:gap-7 relative "
      >
        {films.map((film) => {
          return (
            <div
              onClick={() => {
                setSelectedFilm(film);
                setDetails(true);
              }}
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
      {details && selectedFilm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex flex-row items-center">
              <img
                src={selectedFilm.image}
                alt={selectedFilm.judul}
                className="rounded w-48 h-32 mb-4 object-cover"
              />
              <div className="flex flex-col ml-2">
                <div className=" w-full flex justify-center">
                  <h3 className="text-md font-bold text-gray-900 mb-2">
                    Judul : {selectedFilm.judul}
                  </h3>
                </div>
                <div className="">
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    {selectedFilm.detail}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <button
                onClick={() => setDetails(false)}
                className="inline-flex justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-300 transition"
              >
                Close
              </button>
            
            </div>
          </div>
        </div>
      )}
    </>
  );
});
export default FilmContentFirst;
