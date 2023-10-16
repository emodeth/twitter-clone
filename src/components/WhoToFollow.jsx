import WhoToFollowItem from "./WhooToFollowItem";
import { whoToFollow } from "../utils/whoToFollow";
import ShowMore from "./ShowMore";

function WhoToFollow() {
  return (
    <div className="bg-[color:var(--background-secondary)] rounded-2xl mb-4 border border-[color:var(--background-secondary)] flex flex-col">
      <h5 className="flex items-center py-3 px-4 text-xl font-extrabold leading-6">
        Kimi takip etmeli
      </h5>
      {whoToFollow.map((acc) => (
        <WhoToFollowItem item={acc} key={acc.id} />
      ))}
      <ShowMore />
    </div>
  );
}

export default WhoToFollow;
