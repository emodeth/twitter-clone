import FollowButton from "./FollowButton";
import FollowingButton from "./FollowingButton";
import { useState } from "react";

function WhooToFollowItem({ item }) {
  const [following, setFollowing] = useState(false);
  function handleFollow() {
    setFollowing((status) => !status);
  }

  return (
    <button className="py-3 px-4 flex transition-colors items-center hover:bg-[#eff3f41a] cursor-pointer">
      <img
        alt="avatar"
        src={item.avatar}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="flex flex-col items-start mx-3 flex-1">
        <p className="text-[#E7EAE9] font-bold">{item.fullName}</p>
        <p className="text-[#71767B]">@{item.username}</p>
      </div>
      {following ? (
        <FollowingButton handleFollow={handleFollow} />
      ) : (
        <FollowButton handleFollow={handleFollow} />
      )}
    </button>
  );
}

export default WhooToFollowItem;
