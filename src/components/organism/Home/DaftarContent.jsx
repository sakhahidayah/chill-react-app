import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function DaftarContent() {
  const [savedFilms, setSavedFilms] = useState([]);
  const [details, setDetails] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilm({ ...selectedFilm, [name]: value });
  };

  useEffect(() => {
    const films = JSON.parse(localStorage.getItem("selectedFilm")) || [];
    setSavedFilms(films);
  }, []);
  const updatedList = () => {
    const updatedFilms = savedFilms.map((film) =>
      film.id === selectedFilm.id ? selectedFilm : film
    );
    localStorage.setItem("selectedFilm", JSON.stringify(updatedFilms));
    setSavedFilms(updatedFilms);
    setDetails(false);
    Swal.fire({
      title: "Disimpan!",
      text: "Film berhasil diperbarui.",
      icon: "success",
    });
  };

  const deleteFilm = () => {
    if (savedFilms.length !== 0) {
      localStorage.removeItem("selectedFilm");
      setSavedFilms([]);
      Swal.fire({
        title: "Dihapus!",
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
  const deleteSelectedFilm = () => {
    const updatedFilms = savedFilms.filter(
      (film) => film.id !== selectedFilm.id
    );
    localStorage.setItem("selectedFilm", JSON.stringify(updatedFilms));
    setSavedFilms(updatedFilms);
    setDetails(false);
    Swal.fire({
      title: "Dihapus!",
      text: "Film berhasil dihapus.",
      icon: "success",
    });
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
                onClick={() => {
                  setSelectedFilm(film);
                  setDetails(true);
                }}
                key={index}
                style={{ backgroundImage: `url(${film.image})` }}
                className="bg-cover bg-center border rounded w-36 sm:w-40 md:w-44 h-64 sm:h-72 md:h-80 flex items-end justify-center relative "
              >
                <button className=" w-18 h-8 border absolute rounded-lg bg-green-600 hover:bg-green-400 text-white cursor-pointer -bottom-5">
                  Edit
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center justify-center w-full text-gray-400 text-base">
              Belum ada film favorit yang disimpan.
            </p>
          )}
        </div>
      </div>
      {details && selectedFilm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex flex-row items-center">
              <img
                src={selectedFilm.image}
                alt={selectedFilm.judul}
                className="rounded w-32 h-48 mb-4 object-cover"
              />
              <div className=" ml-5 text-slate-400">
                <form action="" className="flex flex-col justify-center">
                  <label htmlFor="" className="">
                    Judul
                  </label>
                  <input
                    value={selectedFilm.judul}
                    type="text"
                    name="judul"
                    onChange={handleChange}
                    className="border border-slate-400 px-4 py-2"
                  />
                  <label htmlFor="" className="">
                    Sinopsis
                  </label>
                  <textarea
                    value={selectedFilm.detail}
                    name="detail"
                    onChange={handleChange}
                    className="border border-slate-500 px-4 py-2 "
                  ></textarea>
                </form>
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <button
                onClick={() => setDetails(false)}
                className="inline-flex justify-center rounded-md bg-slate-600 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-300 transition"
              >
                Close
              </button>
              <button
                onClick={deleteSelectedFilm}
                className="inline-flex justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-300 transition"
              >
                Hapus
              </button>
              <button
                onClick={updatedList}
                className="inline-flex justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-300 transition"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DaftarContent;
