import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [modal, setModal] = useState(false);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  return context;
}

export default ModalProvider;
