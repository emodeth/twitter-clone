import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentAccount, setCurrentAccount] = useState({
    id: 1,
    username: "emodeth",
    fullName: "emodeth",
    avatar:
      "https://pbs.twimg.com/profile_images/1708960766928338945/_ukIl2pd_400x400.jpg",
  });
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      username: "emodeth",
      fullName: "emodeth",
      avatar:
        "https://pbs.twimg.com/profile_images/1708960766928338945/_ukIl2pd_400x400.jpg",
    },
    {
      id: 2,
      username: "emodethistaken",
      fullName: "emodeth",
      avatar:
        "https://pbs.twimg.com/profile_images/1582125591607787521/9xkDDUOu_400x400.jpg",
    },
  ]);

  return (
    <AuthContext.Provider
      value={{ currentAccount, setCurrentAccount, accounts }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export default AuthProvider;
