import Label from "../atoms/Label";
import Input from "../atoms/Input";

function RegisterInputPassword() {
  return (
    <>
      <div className="flex flex-col gap-1 mb-5">
        <Label label="Kata sandi" />
        <div className="flex flex-col relative">
          <Input
            type="password"
            id="password"
            placeholder="Masukkan kata sandi"
          />
          <i className="absolute top-2 right-3 w-3 h-2">
            <img src="/images/favicon/eye-splash-off.png" alt="" />
          </i>
        </div>
      </div>
    </>
  );
}

export default RegisterInputPassword;
