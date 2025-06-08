import BackgroundHeader from "../atoms/BackgroundHeader";
import Caption from "../atoms/Caption";
import IconHeader from "../atoms/IconHeader";
function HeaderChild() {
  return (
    <>
      <header>
        <BackgroundHeader>
          <Caption />
          <IconHeader />
        </BackgroundHeader>
      </header>
    </>
  );
}

export default HeaderChild;
