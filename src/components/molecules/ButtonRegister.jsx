import ButtonMasuk from "../atoms/ButtonMasuk";
import ButtonGoogle from "../atoms/ButtonGoogle";
function ButtonRegister() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <ButtonMasuk href="/login" />
        <ButtonGoogle />
      </div>
    </>
  );
}

export default ButtonRegister;
