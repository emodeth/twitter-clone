import { Link } from "react-router-dom";

function ShowMore() {
  return (
    <Link
      to="/"
      className="h-[52px] flex items-center px-4 hover:bg-white/[0.03] transition-colors text-[#1d9bf0]"
    >
      Daha fazla göster
    </Link>
  );
}

export default ShowMore;
