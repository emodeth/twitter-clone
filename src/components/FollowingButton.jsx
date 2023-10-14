function FollowingButton({ handleFollow }) {
  return (
    <button
      onClick={handleFollow}
      className="transition-all group rounded-full flex items-center justify-center font-bold px-4 h-8 text-sm border border-[#e7e9ea] text-[##e7e9ea] bg-transparent relative z-10 hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]"
    >
      <p className="block group-hover:hidden">Takip ediliyor</p>
      <p className="hidden group-hover:block">Takibi bırak</p>
    </button>
  );
}

export default FollowingButton;
