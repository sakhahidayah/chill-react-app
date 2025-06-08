function TextLogin() {
  return (
    <>
      <div className="flex flex-row justify-between mb-5">
        <p className="font-normal text-[#C1C2C4] text-[9px]">
          Belum punya akun?
          <a href="/register" className="text-white">
            Daftar
          </a>
        </p>
        <p className="font-normal text-[9px]">Lupa kata sandi?</p>
      </div>
    </>
  );
}

export default TextLogin;
