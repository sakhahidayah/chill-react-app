import { forwardRef } from "react";
const FilmContentThird = forwardRef((props, ref) => {
  return (
    <>
      <div
      ref={ref}
        id="trending"
        class="mt-5 flex flex-nowrap overflow-x-auto gap-4 scroll-smooth snap-center lg:min-w-full lg:gap-7 lg:overflow-x-hidden"
      >
        <div class="bg-[url('/images/movies/thetomorrow.png')] min-w-24 h-36 bg-cover bg-center rounded flex relative lg:min-w-[234px] lg:min-h-[365px]">
          <div class="flex flex-wrap p-[2px] w-[14px] h-[21px] bg-red-500 top-0 right-1 absolute">
            <span class="font-normal text-[6px] leading-[140%]">Top</span>
            <span class="font-normal text-[6px] leading-[140%]">10</span>
          </div>
        </div>
        <div class="bg-[url('/images/movies/quantumania.png')] min-w-24 h-36 bg-cover bg-center rounded relative lg:min-w-[234px] lg:min-h-[365px]">
          <div class="flex flex-wrap p-[2px] w-[14px] h-[21px] bg-red-500 top-0 right-1 absolute">
            <span class="font-normal text-[6px] leading-[140%]">Top</span>
            <span class="font-normal text-[6px] leading-[140%]">10</span>
          </div>
        </div>
        <div class="bg-[url('/images/movies/littlemermaid.png')] min-w-24 h-36 bg-cover bg-center rounded relative lg:min-w-[234px] lg:min-h-[365px]">
          <div class="flex flex-wrap p-[2px] w-[14px] h-[21px] bg-red-500 top-0 right-1 absolute">
            <span class="font-normal text-[6px] leading-[140%]">Top</span>
            <span class="font-normal text-[6px] leading-[140%]">10</span>
          </div>
        </div>
        <div class="bg-[url('/images/movies/infinitywar.jpg')] min-w-24 h-36 bg-cover bg-center rounded relative lg:min-w-[234px] lg:min-h-[365px]">
          <div class="flex flex-wrap p-[2px] w-[14px] h-[21px] bg-red-500 top-0 right-1 absolute">
            <span class="font-normal text-[6px] leading-[140%]">Top</span>
            <span class="font-normal text-[6px] leading-[140%]">10</span>
          </div>
        </div>
        <div class="bg-[url('/images/movies/ghibli.jpg')] min-w-24 h-36 bg-cover bg-center rounded relative lg:min-w-[234px] lg:min-h-[365px]">
          <div class="flex flex-wrap p-[2px] w-[14px] h-[21px] bg-red-500 top-0 right-1 absolute">
            <span class="font-normal text-[6px] leading-[140%]">Top</span>
            <span class="font-normal text-[6px] leading-[140%]">10</span>
          </div>
        </div>
        <div class="bg-[url('/images/movies/fastandfurious.jpg')] min-w-24 h-36 bg-cover bg-center rounded relative lg:min-w-[234px] lg:min-h-[365px]">
          <div class="flex flex-wrap p-[2px] w-[14px] h-[21px] bg-red-500 top-0 right-1 absolute">
            <span class="font-normal text-[6px] leading-[140%]">Top</span>
            <span class="font-normal text-[6px] leading-[140%]">10</span>
          </div>
        </div>
      </div>
    </>
  );
});

export default FilmContentThird;
