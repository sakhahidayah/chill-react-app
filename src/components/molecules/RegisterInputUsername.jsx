import Label from "../atoms/Label";
import Input from "../atoms/Input";

function RegisterInputUsername({ value, onChange }) {
  return (
    <div className="flex flex-col gap-1 mb-5">
      <Label label="Username" />
      <Input
        type="text"
        id="username"
        placeholder="Masukkan username"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default RegisterInputUsername;
