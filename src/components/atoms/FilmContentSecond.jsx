import { forwardRef } from "react";
const FilmContentSecond = forwardRef((props,ref) => {
  return (
    <>
      <div
      ref={ref}
        id="topRating"
        class="mt-5 flex flex-nowrap overflow-x-auto gap-4 scroll-smooth snap-center snap-x lg:min-w-full lg:gap-7 lg:overflow-x-hidden"
      >
        <div class="bg-[url('/images/movies/suzume.png')] min-w-24 h-36 bg-cover bg-center rounded pt-2 pl-2 lg:min-w-[234px] lg:min-h-[365px] snap-end">
          <p class="bg-[#0F1E93] rounded-xl w-[44px] h-[14px] px-1 py-0.5 border-[0.5px] font-bold text-[5.74px] leading-[140%] border-[#0F1E93]">
            Episode baru
          </p>
        </div>
        <div class="bg-[url('/images/movies/sonic.png')] min-w-24 h-36 bg-cover bg-center rounded lg:min-w-[234px] lg:min-h-[365px] snap-end"></div>
        <div class="bg-[url('/images/movies/big-hero.png')] min-w-24 h-36 bg-cover bg-center rounded pt-2 pl-2 lg:min-w-[234px] lg:min-h-[365px] snap-end">
          <p class="bg-[#0F1E93] rounded-xl w-[44px] h-[14px] px-1 py-0.5 border-[0.5px] font-bold text-[5.74px] leading-[140%] border-[#0F1E93]">
            Episode baru
          </p>
        </div>
        <div class="bg-[url('/images/movies/jurasicworld.png')] min-w-24 h-36 bg-cover bg-center rounded lg:min-w-[234px] lg:min-h-[365px] snap-end"></div>
        <div class="bg-[url('/images/movies/allofus.png')] min-w-24 h-36 bg-cover bg-center rounded pt-2 pl-2 lg:min-w-[234px] lg:min-h-[365px] snap-end">
          <p class="bg-[#0F1E93] rounded-xl w-[44px] h-[14px] px-1 py-0.5 border-[0.5px] font-bold text-[5.74px] leading-[140%] border-[#0F1E93]">
            Episode baru
          </p>
        </div>
        <div class="bg-[url('/images/movies/guardian.png')] min-w-24 h-36 bg-cover bg-center rounded lg:min-w-[234px] lg:min-h-[365px] snap-end"></div>
      </div>
    </>
  );
})

export default FilmContentSecond;
