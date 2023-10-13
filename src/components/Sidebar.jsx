import Account from "./Account";
import Logo from "./Logo";
import Menu from "./Menu";

function Sidebar() {
  return (
    <aside className="w-[275px] h-screen px-2 flex flex-col ">
      <Logo />
      <Menu />
      <Account />
    </aside>
  );
}

export default Sidebar;
