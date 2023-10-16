function FollowButton({ handleFollow }) {
  return (
    <button
      onClick={handleFollow}
      className="rounded-full flex items-center justify-center font-bold px-4 h-8 text-sm bg-[color:var(--color-base)] text-[color:var(--background-primary)] hover:opacity-90 transition-all relative z-10"
    >
      Takip et
    </button>
  );
}

export default FollowButton;
