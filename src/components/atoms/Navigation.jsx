function Navigation() {
  return (
    <>
      <div className="flex justify-center items-center gap-4 lg:gap-10 font-medium text-[10px] leading-[140%] tracking-wide lg:min-w-[200px] ">
        <img
          src="/images/favicon/movie-open.png"
          alt=""
          className="block w-4 h-4 lg:hidden"
        />
        <div className="hidden bg-[url('/images/favicon/chill.png')] w-[103px] h-7 bg-cover lg:block"></div>
        <a
          href=""
          className="lg:font-medium lg:text-lg leading-[140%] tracking-wide hover:text-white hover:underline hover:underline-offset-2 transition-colors duration-300"
        >
          Series
        </a>
        <a
          href="/HomePage"
          className="lg:font-medium lg:text-lg leading-[140%] tracking-wide hover:text-white hover:underline hover:underline-offset-2 transition-colors duration-300"
        >
          Film
        </a>
        <a
          href="/daftar-saya"
          className="lg:font-medium lg:text-lg leading-[140%] tracking-wide hover:text-white hover:underline hover:underline-offset-2 transition-colors duration-300"
        >
          Daftar Saya
        </a>
      </div>
    </>
  );
}
export default Navigation