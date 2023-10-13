import { useAuth } from "../contexts/AuthContext";

function AccountPanel({ close }) {
  const { currentAccount, accounts, setCurrentAccount } = useAuth();

  return (
    <div className="flex flex-col">
      {accounts.map((acc, i) => (
        <button
          onClick={() => {
            if (currentAccount.id === acc.id) return;
            setCurrentAccount(acc);
            close();
          }}
          className={`${"py-3 px-4 flex transition-colors items-center"} ${
            currentAccount.id !== acc.id && "hover:bg-[#eff3f41a]"
          }`}
          key={i}
        >
          <img
            className="h-10 w-10 rounded-full"
            src={acc.avatar}
            alt="avatar"
          />
          <div className="flex flex-col items-start mx-3 flex-1">
            <p className="text-[#E7EAE9] font-bold">{acc.fullName}</p>
            <p className="text-[#71767B]">@{acc.username}</p>
          </div>

          {currentAccount.id === acc.id && (
            <svg
              viewBox="0 0 24 24"
              width={18.75}
              height={18.75}
              className="mr-2 ml-3"
              fill="#00ba7c"
            >
              <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"></path>
            </svg>
          )}
        </button>
      ))}
      <div className="h-px bg-[#2f3336] my-3"></div>

      <button className="py-3 px-4 text-left hover:bg-[#eff3f41a] transition-colors w-full font-bold text-[#e7e9ea]">
        Var olan bir hesap ekle
      </button>
      <button className="py-3 px-4 text-left hover:bg-[#eff3f41a] transition-colors w-full font-bold text-[#e7e9ea]">
        Hesapları yönet
      </button>
      <button className="py-3 px-4 text-left hover:bg-[#eff3f41a] transition-colors w-full font-bold text-[#e7e9ea]">
        @{currentAccount.username} hesabından çıkış yap
      </button>
    </div>
  );
}

export default AccountPanel;
