function BackgroundHeader({ children }) {
  return (
    <>
      <div className="bg-gradient-to-b from-[#000000] to-[#181A1C]">
        <div class="bg-[linear-gradient(to_top,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_60%),url('/images/movies/bg-duty.png')] bg-cover bg-center overflow-hidden flex flex-col min-h-60 pl-7 pt-20 pb-10 pr-4 lg:pl-20 lg:pt-40 lg:pr-20">
          {children}
        </div>
      </div>
    </>
  );
}

export default BackgroundHeader;
