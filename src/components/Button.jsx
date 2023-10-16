function Button({ size, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${"bg-[color:var(--color-primary)] rounded-full px-4 h-9 flex items-center font-bold transition-all hover:opacity-90 text-white"} ${
        size === "large" && "!px-6 !h-[52px] w-full justify-center text-[17px]"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
