import { mainMenu } from "../utils/mainMenu";
import MenuItem from "./MenuItem";
import More from "./More";
import NewTweet from "./NewTweet";

function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
      <More />
      <NewTweet />
    </nav>
  );
}

export default Menu;
