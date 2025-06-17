import Swal from "sweetalert2";

function ButtonGoogle() {
  const swal = () => {
    Swal.fire({
      title: "Mohon maaf!",
      text: "Fitur belum ditambahkan 😁",
      icon: "info",
    });
  };
  
  return (
    <>
      <button
      onClick={swal}
        type="submit"
        className="w-full px-3 py-2 bg-transparent border-[0.58px] border-[#E7E3FC3B rounded-[14px] font-semibold text-[10px] leading-[140%] tracking-wide flex flex-row justify-center items-center gap-2 hover:bg-[#3D4142] cursor-pointer"
      >
        <img src="/images/favicon/google.png" alt="" />
        <span>Masuk dengan Google</span>
      </button>
    </>
  );
}

export default ButtonGoogle;
