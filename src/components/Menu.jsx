import { mainMenu } from "../utils/mainMenu";
import MenuItem from "./MenuItem";
import More from "./More";
import Button from "./Button";

function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
      <More />
      <div className="my-[14px] w-[90%]">
        <Button size={"large"}>Gönder</Button>
      </div>
    </nav>
  );
}

export default Menu;
