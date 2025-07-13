import { useState } from "react";
import Swal from "sweetalert2";
import Tittle from "../atoms/Tittle";
import LoginInputUsername from "../molecules/LoginInputUsername";
import LoginInputPassword from "../molecules/LoginInputPassword";
import TextLogin from "../atoms/TextLogin";
import ButtonMasuk from "../atoms/ButtonMasuk";
import ButtonGoogle from "../atoms/ButtonGoogle";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      Swal.fire({
        title: "Error",
        text: "Semua field wajib diisi!",
        icon: "error",
      });
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = existingUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      Swal.fire({
        title: "Error",
        text: "Username atau password salah!",
        icon: "error",
      });
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

    Swal.fire({
      title: "Berhasil",
      text: "Login berhasil!",
      icon: "success",
    }).then(() => {
      window.location.href = "/HomePage";
    });
  }

  return (
    <div
      className="flex bg-cover bg-center font-lato text-white w-screen h-screen justify-center items-center overflow-hidden bg-no-repeat"
      style={{ backgroundImage: "url('/images/background/masuk.jpg')" }}
    >
      <main className="bg-[#181a1ced] rounded-lg p-6 gap-5 min-w-[306px]">
        <Tittle children={"Masuk"} text={"Selamat datang kembali!"} />
        <form onSubmit={handleSubmit}>
          <LoginInputUsername
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <LoginInputPassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextLogin />
          <div className="flex flex-col justify-center items-center gap-3">
            <ButtonMasuk type="submit" text="Masuk" />
            <ButtonGoogle />
          </div>
        </form>
      </main>
    </div>
  );
}

export default LoginForm;
