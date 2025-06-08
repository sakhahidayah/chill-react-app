import { forwardRef } from "react";
const FilmContentFourth = forwardRef((props,ref) => {
  return (
    <>
      
      <div
      ref={ref}
        id="rilisBaru"
        className="mt-5 flex flex-nowrap overflow-x-auto gap-4 scroll-smooth snap-center lg:min-w-full lg:gap-7 lg:overflow-x-hidden"
      >
        <div className="bg-[url('images/movies/dutyafter.png')] min-w-24 h-36 bg-cover bg-center rounded pt-2 pl-2 lg:min-w-[234px] lg:min-h-[365px]">
          <p className="bg-[#0F1E93] rounded-xl w-[44px] h-[14px] px-1 py-0.5 border-[0.5px] font-bold text-[5.74px] leading-[140%] border-[#0F1E93]">
            Episode baru
          </p>
        </div>
        <div className="bg-[url('images/movies/frieren.jpg')] min-w-24 h-36 bg-cover bg-center rounded relative lg:min-w-[234px] lg:min-h-[365px]">
          <div className="flex flex-wrap p-[2px] w-[14px] h-[21px] bg-red-500 top-0 right-1 absolute">
            <span className="font-normal text-[6px] leading-[140%]">Top</span>
            <span className="font-normal text-[6px] leading-[140%]">10</span>
          </div>
        </div>
        <div className="bg-[url('images/movies/thewind.jpg')] min-w-24 h-36 bg-cover bg-center rounded relative lg:min-w-[234px] lg:min-h-[365px]">
          <div className="flex flex-wrap p-[2px] w-[14px] h-[21px] bg-red-500 top-0 right-1 absolute">
            <span className="font-normal text-[6px] leading-[140%]">Top</span>
            <span className="font-normal text-[6px] leading-[140%]">10</span>
          </div>
        </div>
        <div className="bg-[url('images/movies/venom.jpg')] min-w-24 h-36 bg-cover bg-center rounded relative lg:min-w-[234px] lg:min-h-[365px]">
          <div className="flex flex-wrap p-[2px] w-[14px] h-[21px] bg-red-500 top-0 right-1 absolute">
            <span className="font-normal text-[6px] leading-[140%]">Top</span>
            <span className="font-normal text-[6px] leading-[140%]">10</span>
          </div>
        </div>
        <div className="bg-[url('images/movies/squidgame.jpg')] min-w-24 h-36 bg-cover bg-center rounded pt-2 pl-2 lg:min-w-[234px] lg:min-h-[365px]">
          <p className="bg-[#0F1E93] rounded-xl w-[44px] h-[14px] px-1 py-0.5 border-[0.5px] font-bold text-[5.74px] leading-[140%] border-[#0F1E93]">
            Episode baru
          </p>
        </div>
        <div className="bg-[url('images/movies/jumbo.jpg')] min-w-24 h-36 bg-cover bg-center rounded relative lg:min-w-[234px] lg:min-h-[365px]">
          <div className="flex flex-wrap p-[2px] w-[14px] h-[21px] bg-red-500 top-0 right-1 absolute">
            <span className="font-normal text-[6px] leading-[140%]">Top</span>
            <span className="font-normal text-[6px] leading-[140%]">10</span>
          </div>
        </div>
      </div>
    </>
  );
});

export default FilmContentFourth;
