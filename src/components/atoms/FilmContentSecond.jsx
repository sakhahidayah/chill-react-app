import React, { useEffect, useState, forwardRef } from "react";
import filmsStore from "../../stores/store";

const FilmContentSecond = forwardRef((props, ref) => {
  const { films, fetchFilms, addFilm } = filmsStore();
  const [details, setDetails] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  const handleFilm = () => {
    addFilm(selectedFilm);
  };

  return (
    <>
      <div
        onClick={() => setDetails(!details)}
        ref={ref}
        id="topRating"
        className="mt-5 flex flex-nowrap overflow-x-auto gap-4 scroll-smooth snap-center snap-x lg:min-w-full lg:gap-7 lg:overflow-x-hidden relative group"
      >
        {films.slice(0, 6).map((film) => {
          return (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setSelectedFilm(film);
                setDetails(true);
              }}
              key={film.id}
              style={{ backgroundImage: `url(${film.image})` }}
              className="min-w-24 h-36 bg-cover bg-center rounded pt-2 pl-2 lg:min-w-[234px] lg:min-h-[365px] snap-end cursor-pointer transition duration-300 ease-out-in transform hover:scale-90 "
            >
              <p className="bg-[#0F1E93] rounded-xl w-[55px] h-[14px] px-1 py-0.5 border-[0.5px] font-bold text-[6.74px] leading-[140%] border-[#0F1E93]">
                Episode baru
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
                alt={selectedFilm.title}
                className="rounded w-32 h-48 mb-4 object-cover"
              />
              <div className="flex flex-col ml-2">
                <div className=" w-full flex justify-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Judul : {selectedFilm.title}
                  </h3>
                </div>
                <div className="">
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    {selectedFilm.desc}
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
              <button
                onClick={handleFilm}
                className="inline-flex justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-300 transition"
              >
                Tambah
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default FilmContentSecond;
