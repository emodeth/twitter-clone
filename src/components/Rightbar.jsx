import Footer from "./Footer";
import Search from "./Search";
import Subscribe from "./Subscribe";
import Topics from "./Topics";
import WhoToFollow from "./WhoToFollow";

function Rightbar() {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search />
      <Subscribe />
      <Topics />
      <WhoToFollow />
      <Footer />
    </aside>
  );
}

export default Rightbar;
