import FooterChild from "../../molecules/FooterChild";
import GenreHelp from "../../molecules/GenreHelp";
import GenreHelpHidden from "../../molecules/GenreHelpHidden";
function Footer() {
  return (
    <>
      <footer class="mt-7 bg-[#181A1C] border-[#E7E3FC3B] border-t-2 p-5 text-white lg:flex lg:flex-row lg:justify-between">
        <FooterChild />
        <GenreHelpHidden />
        <GenreHelp /> 
      </footer>
    </>
  );
}

export default Footer;
