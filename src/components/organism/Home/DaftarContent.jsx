import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function DaftarContent() {
  const [savedFilms, setSavedFilms] = useState([]);

  useEffect(() => {
    const films = JSON.parse(localStorage.getItem("selectedFilm")) || [];
    setSavedFilms(films);
  }, []);

  const deleteFilm = () => {
    if (savedFilms.length !== 0) {
      localStorage.removeItem("selectedFilm");
      setSavedFilms([]);
      Swal.fire({
        title: "Success!!",
        text: "Film berhasil dihapus!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!!",
        text: "Tidak ada data film",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col p-4">
        <div className="flex flex-col sm:flex-row mb-5 gap-4 sm:gap-20 items-center self-center">
          <h2 className="text-lg font-bold">Daftar Film Favorit</h2>
          <button
            onClick={deleteFilm}
            className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-400 text-white cursor-pointer"
          >
            Delete All
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:flex gap-4 min-h-screen ">
          {savedFilms.length > 0 ? (
            savedFilms.map((film, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${film.image})` }}
                className="bg-cover bg-center border rounded w-36 sm:w-40 md:w-44 h-64 sm:h-72 md:h-80"
              ></div>
            ))
          ) : (
            <p className="col-span-full text-center justify-center w-full text-gray-400 text-base">
              Belum ada film favorit yang disimpan.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default DaftarContent;
