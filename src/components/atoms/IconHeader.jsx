function IconHeader() {
  return (
    <>
      <div className="flex flex-row gap-2">
        <button className="px-3 py-1 bg-[#0F1E93] rounded-2xl w-14 h-6 font-bold text-xs leading-[140%] tracking-wide lg:w-[93px] lg:h-[42px] lg:rounded-[48px] lg:px-[26px] lg:text-base">
          Mulai
        </button>
        <button className="bg-gray-700 rounded-2xl px-3 py-1 font-bold text-xs leading-[140%] tracking-wide flex flex-row gap-2 justify-center items-center lg:px-[26px] lg:py-5 lg:rounded-[48px] lg:w-[185px] lg:h-[45px] lg:text-base lg:gap-3">
          <i className="fas fa-info-circle w-3 h-3"></i> Selengkapnya
        </button>
        <div className="flex flex-row gap-1 justify-between items-center w-full">
          <div className="bg-transparent w-[30px] h-[25px] border rounded-3xl p-1 text-xs font-bold leading-[140%] tracking-wide lg:w-[52px] lg:h-[45px] lg:p-[10px] lg:text-lg text-[#C1C2C4] flex justify-center items-center">
            <p>18+</p>
          </div>
          <div className="w-6 h-[25px] rounded-3xl border border-[#C1C2C4] p-2 flex justify-center items-center lg:w-11 lg:h-11">
            <i className="material-icons text-sm text-[#C1C2C4] lg:text-2xl">
              volume_off
            </i>
          </div>
        </div>
      </div>
    </>
  );
}
export default IconHeader