import Icon from "../atoms/Icon";
import Navigation from "../atoms/Navigation";
function NavbarItems() {
  return (
    <>
      <div className="flex justify-between">
        <Navigation />
        <Icon />
      </div>
    </>
  );
}

export default NavbarItems
