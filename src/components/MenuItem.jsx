import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function MenuItem({ item }) {
  const { currentAccount } = useAuth();

  return (
    <NavLink
      to={item.path !== "/profile" ? item.path : `${currentAccount.username}`}
      className="block py-[0.188rem] group"
    >
      {({ isActive }) => (
        <div className="items-center gap-5 p-3 rounded-full transition-colors inline-flex group-hover:bg-[color:var(--background-tertiary)]">
          <div className="w-[26.25px] h-[26.25px] relative">
            {item.notification && (
              <span className="w-[18px] h-[18px] rounded-full bg-[color:var(--color-primary)] text-white absolute top-[-6px] right-[-4px] flex items-center justify-center text-[11px] border border-[color:var(--background-primary)] ">
                {item.notification}
              </span>
            )}
            {isActive ? item.icon.active : item.icon.passive}
          </div>
          <div className={`${"pr-4 text-xl"} ${isActive ? "font-bold" : null}`}>
            {item.title}
          </div>
        </div>
      )}
    </NavLink>
  );
}

export default MenuItem;
