import Tittle from "../atoms/Tittle";
import RegisterInputPassword from "../molecules/RegisterInputPassword";
import RegisterInputUsername from "../molecules/RegisterInputUsername";
import RegisterInputConfirm from "../molecules/RegisterInputConfirm";
import ButtonRegister from "../molecules/ButtonRegister";
function RegisterForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div
        className="flex bg-cover bg-center font-lato text-white w-screen h-screen justify-center items-center overflow-hidden bg-no-repeat"
        style={{ backgroundImage: "url('/images/background/daftar.jpg')" }}
      >
        <main className="bg-[#181a1ced] rounded-lg p-6 gap-5 min-w-[306px]">
          <Tittle children={"Daftar"} text={"Selamat datang!"} />
          <form action="" onSubmit={handleSubmit}>
            <RegisterInputUsername />
            <RegisterInputPassword />
            <RegisterInputConfirm />
            <ButtonRegister />
          </form>
        </main>
      </div>
    </>
  );
}

export default RegisterForm;
