import Input from "../atoms/Input";
import Label from "../atoms/Label";

function LoginInputUsername() {
  return (
    <>
      <div className="flex flex-col gap-1 mb-5">
        <Label label="Username" />
        <Input type="text" id="username" placeholder="Masukkan username" />
      </div>
    </>
  );
}

export default LoginInputUsername;
