import React, { useEffect, useState, forwardRef } from "react";
import filmsStore from "../../stores/store";

const FilmContentThird = forwardRef((props, ref) => {
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
        id="trending"
        className="mt-5 flex flex-nowrap overflow-x-auto gap-4 scroll-smooth snap-center lg:min-w-full lg:gap-7 lg:overflow-x-hidden"
      >
        {films.slice(6, 12).map((film) => (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setSelectedFilm(film);
              setDetails(true);
            }}
            key={film.id}
            style={{ backgroundImage: `url(${film.image})` }}
            className="min-w-24 h-36 bg-cover bg-center rounded flex relative lg:min-w-[234px] lg:min-h-[365px] transition duration-300 ease-out-in transform hover:scale-90 cursor-pointer"
          >
            <div className="flex flex-wrap p-[2px] w-[14px] h-[21px] bg-red-500 top-0 right-1 absolute">
              <span className="font-normal text-[6px] leading-[140%]">Top</span>
              <span className="font-normal text-[6px] leading-[140%]">10</span>
            </div>
          </div>
        ))}
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

export default FilmContentThird;
