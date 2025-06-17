function GenreHidden() {
  return (
    <>
      <details className="p-4 group duration-300 transition-all lg:hidden">
        <summary className="flex flex-row justify-between items-center cursor-pointer select-none">
          <span className="font-bold text-base leading-[140%] tracking-wide">
            Genre
          </span>
          <i className="fas fa-angle-right transform transition-transform duration-300 group-open:rotate-90"></i>
        </summary>
        <div className="transition-all duration-300 ease-in-out max-h-0 group-open:max-h-[500px] mt-3 font-medium text-base leading-[140%] tracking-wide text-[#C1C2C4] grid grid-rows-4 grid-flow-col gap-3">
          <p>Aksi</p>
          <p>Anak-anak</p>
          <p>Britania</p>
          <p>Anime</p>
          <p>Drama</p>
          <p>Fantasi Ilmiah & Fantasi</p>
          <p>Kejahatan</p>
          <p>KDrama</p>
          <p>Komedi</p>
          <p>Petualang</p>
          <p>Romantis</p>
          <p>Perang</p>
          <p>Sains & Alam</p>
          <p>Thriller</p>
        </div>
      </details>
    </>
  );
}

export default GenreHidden;
