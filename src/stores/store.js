import { create } from "zustand";
import api from "../services/api";
import Swal from "sweetalert2";

const filmsStore = create((set) => ({
  films: [],
  selectedFilm: null,

  setSelectedFilm: (film) => set({ selectedFilm: film }),

  fetchFilms: async () => {
    try {
      const response = await api.get("/movies");
      set({ films: response.data });
    } catch (error) {
      console.error("Gagal fetch film", error);
    }
  },

  addFilm: (film) => {
    let saveFilm = JSON.parse(localStorage.getItem("selectedFilm")) || [];
    const isFilmExist = saveFilm.some((item) => item.id === film.id);

    if (!isFilmExist) {
      saveFilm.push(film);
      localStorage.setItem("selectedFilm", JSON.stringify(saveFilm));
      Swal.fire({
        title: "Berhasil!",
        text: "Film berhasil ditambahkan!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Oops!!",
        text: "Film sudah ada didaftar!",
        icon: "error",
      });
    }
  },
}));

export default filmsStore;
