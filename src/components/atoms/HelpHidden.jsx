function HelpHidden() {
  return (
    <>
   
      <details className="p-4 group duration-300 transition-all lg:hidden">
        <summary className="flex flex-row justify-between items-center cursor-pointer">
          <span className="font-bold text-base leading-[140%] tracking-wide">
            Bantuan
          </span>
          <i className="fas fa-angle-right transition-transform duration-300 group-open:rotate-90"></i>
        </summary>
        <div className="flex flex-col gap-3 mt-3 font-medium text-base leading-[140%] tracking-wide text-[#C1C2C4] transition-all duration-300 ease-in-out max-h-0 group-open:max-h-[500px]">
          <p>FAQ</p>
          <p>Kontak Kami</p>
          <p>Privasi</p>
          <p>Syarat & Ketentuan</p>
        </div>
      </details>
    </>
  );
}

export default HelpHidden;
