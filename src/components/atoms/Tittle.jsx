function Tittle({children,text}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-5">
        <img src="/images/favicon/chill.png" alt="" className="w-24 h-6 mb-5" />
        <h3 className="font-bold text-xl leading-[140%] tracking-wide mb-1">
          {children}
        </h3>
        <p className="font-normal text-xs leading-[140%] tracking-wide">
          {text}
        </p>
      </div>
    </>
  );
}

export default Tittle;
