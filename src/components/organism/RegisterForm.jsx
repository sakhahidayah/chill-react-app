import { useState } from "react";
import Swal from "sweetalert2";
import Tittle from "../atoms/Tittle";
import RegisterInputPassword from "../molecules/RegisterInputPassword";
import RegisterInputUsername from "../molecules/RegisterInputUsername";
import RegisterInputConfirm from "../molecules/RegisterInputConfirm";
import ButtonMasuk from "../atoms/ButtonMasuk";
import ButtonGoogle from "../atoms/ButtonGoogle";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password || !confirmPassword) {
      Swal.fire({
        title: "Errors",
        text: "Semua field harus diisi! ",
        icon: "error",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        title: "Errors",
        text: "Password tidak sama! ",
        icon: "error",
      });
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const isExist = existingUsers.find((user) => user.username === username);
    if (isExist) {
      Swal.fire({
        title: "Info",
        text: "Username telah digunakan!",
        icon: "info",
      });
      return;
    }

    const newUser = { username, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    Swal.fire({
      title: "Berhasil",
      text: "Registrasi berhasil, silahkan Login!",
      icon: "success",
    });
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div
      className="flex bg-cover bg-center font-lato text-white w-screen h-screen justify-center items-center overflow-hidden bg-no-repeat"
      style={{ backgroundImage: "url('/images/background/daftar.jpg')" }}
    >
      <main className="bg-[#181a1ced] rounded-lg p-6 gap-5 min-w-[306px]">
        <Tittle children={"Daftar"} text={"Selamat datang!"} />
        <form onSubmit={handleSubmit}>
          <RegisterInputUsername
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <RegisterInputPassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <RegisterInputConfirm
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="flex flex-col justify-center items-center">
            <ButtonMasuk type="submit" text="Daftar" />
            <ButtonGoogle />
          </div>
        </form>
      </main>
    </div>
  );
}

export default RegisterForm;
