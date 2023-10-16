function Button({ size, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${"bg-[#1d9bf0] rounded-full px-4 h-9 flex items-center font-bold transition-colors hover:bg-[#1a8cd8] text-white"} ${
        size === "large" && "!px-6 !h-[52px] w-full justify-center text-[17px]"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
