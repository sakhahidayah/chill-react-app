import Label from "../atoms/Label";
import Input from "../atoms/Input";
import TextRegister from "../atoms/TextRegister";

function RegisterInputConfirm({ value, onChange }) {
  return (
    <>
      <div className="flex flex-col gap-1 mb-[3px]">
        <Label label="Konfirmasi kata sandi" />
        <div className="flex flex-col relative">
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Masukkan kata sandi"
            value={value}
            onChange={onChange}
          />
          <i className="absolute top-2 right-3 w-3 h-2">
            <img src="/images/favicon/eye-splash-off.png" alt="" />
          </i>
        </div>
      </div>
      <TextRegister />
    </>
  );
}

export default RegisterInputConfirm;
