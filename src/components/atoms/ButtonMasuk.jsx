function ButtonMasuk({ href }) {
  return (
    <>
      <a
        href={href}
        className="block bg-transparent px-3 py-2 border border-[#E7E3FC3B] rounded-xl w-full font-semibold text-[10px] leading-[140%] tracking-wide text-center hover:bg-[#3D4142]"
      >
        Masuk
      </a>

      <p className="font-medium text-[#C1C2C4] text-[10px] tracking-wide mb-1 mt-1">
        atau
      </p>
    </>
  );
}

export default ButtonMasuk;
