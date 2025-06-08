import { forwardRef } from "react";
const FilmContentFirst = forwardRef(( props, ref) =>{ 
  return (
    <>
      <div
      ref={ref}
        id="filmContainer"
        className="flex flex-nowrap overflow-x-auto gap-4 scroll-smooth snap-x lg:overflow-x-hidden lg:min-w-full lg:gap-7"
      >
        <div className="bg-[url('/images/movies/dont-look-up.png')] bg-cover bg-center rounded min-h-[151px] flex min-w-[300px] justify-between items-end p-4 snap-end">
          <p className="font-bold text-sm leading-[140%] tracking-wide">
            Don’t Look Up
          </p>
          <p className="font-normal text-xs leading-[140%] tracking-wide">
            <i className="fas fa-star w-3 h-3 mr-1"></i> 4.5/5
          </p>
        </div>
        <div className="bg-[url('/images/movies/blue-lock.png')] bg-cover bg-center rounded min-h-[151px] flex min-w-[300px] justify-between items-end p-4 snap-end">
          <p className="font-bold text-sm leading-[140%] tracking-wide">
            Blue Lock
          </p>
          <p className="font-normal text-xs leading-[140%] tracking-wide">
            <i className="fas fa-star w-3 h-3 mr-1"></i> 4.5/5
          </p>
        </div>
        <div className="bg-[url('/images/movies/doctor-strange.png')] bg-cover bg-center rounded min-h-[151px] flex min-w-[300px] justify-between items-end p-4 snap-end">
          <p className="font-bold text-sm leading-[140%] tracking-wide">
            Doctor Strange
          </p>
          <p className="font-normal text-xs leading-[140%] tracking-wide">
            <i className="fas fa-star w-3 h-3 mr-1"></i> 4.5/5
          </p>
        </div>
        <div className="bg-[url('/images/movies/called-oto.png')] bg-cover bg-center rounded min-h-[151px] flex min-w-[300px] justify-between items-end p-4 snap-end">
          <p className="font-bold text-sm leading-[140%] tracking-wide">
            A man called otto
          </p>
          <p className="font-normal text-xs leading-[140%] tracking-wide">
            <i className="fas fa-star w-3 h-3 mr-1"></i> 4.5/5
          </p>
        </div>

        <div className="bg-[url('/images/movies/nowayhome.jpg')] bg-cover bg-center rounded min-h-[151px] flex min-w-[300px] justify-between items-end p-4 snap-end">
          <p className="font-bold text-sm leading-[140%] tracking-wide">
            Spiderman No Way Home
          </p>
          <p className="font-normal text-xs leading-[140%] tracking-wide">
            <i className="fas fa-star w-3 h-3 mr-1"></i> 4.5/5
          </p>
        </div>
      </div>
    </>
  );
})
export default FilmContentFirst;
