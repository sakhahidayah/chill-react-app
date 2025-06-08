import ButtonMasuk from "../atoms/ButtonMasuk";
import ButtonGoogle from "../atoms/ButtonGoogle";
function ButtonLogin() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <ButtonMasuk href="/HomePage" />
        <ButtonGoogle />
      </div>
    </>
  );
}

export default ButtonLogin;
