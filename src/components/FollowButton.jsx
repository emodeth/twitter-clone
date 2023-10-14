function FollowButton({ handleFollow }) {
  return (
    <button
      onClick={handleFollow}
      className="rounded-full flex items-center justify-center font-bold transition-colors px-4 h-8 text-sm bg-[#e7e9ea] text-[#000000] hover:bg-[#d7dbdc] relative z-10"
    >
      Takip et
    </button>
  );
}

export default FollowButton;
