import Tittle from "../atoms/Tittle";
import LoginInputUsername from "../molecules/LoginInputUsername";
import LoginInputPassword from "../molecules/LoginInputPassword";
import TextLogin from "../atoms/TextLogin";
import ButtonLogin from "../molecules/ButtonLogin";
function LoginForm() {
  return (
    <>
      <div
        className="flex bg-cover bg-center font-lato text-white w-screen h-screen justify-center items-center overflow-hidden bg-no-repeat"
        style={{ backgroundImage: "url('/images/background/masuk.jpg')" }}
      >
        <main className="bg-[#181a1ced] rounded-lg p-6 gap-5 min-w-[306px]">
          <Tittle children={"Masuk"} text={"Selamat datang kembali!"} />
          <form action="">
            <LoginInputUsername />
            <LoginInputPassword />
            <TextLogin />
            <ButtonLogin />
          </form>
        </main>
      </div>
    </>
  );
}

export default LoginForm;
