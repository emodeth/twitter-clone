import { Outlet } from "react-router-dom";
import { useModal } from "../contexts/ModalContext";

import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import Modal from "../modals/Modal";
import { useAppearance } from "../contexts/AppearanceContext";
import { useEffect } from "react";

function MainLayout() {
  const { modal } = useModal();
  const { backgroundColor, generalColor, fontSize, boxShadow } =
    useAppearance();

  useEffect(() => {
    // Background colors
    document.documentElement.style.setProperty(
      "--background-primary",
      backgroundColor.primary
    );
    document.documentElement.style.setProperty(
      "--background-secondary",
      backgroundColor.secondary
    );
    document.documentElement.style.setProperty(
      "--background-tertiary",
      backgroundColor.tertiary
    );
    document.documentElement.style.setProperty(
      "--background-modal",
      backgroundColor.modal
    );

    // General Colors
    document.documentElement.style.setProperty(
      "--color-primary",
      generalColor.primary
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      generalColor.secondary
    );
    document.documentElement.style.setProperty(
      "--color-base",
      generalColor.base
    );
    document.documentElement.style.setProperty(
      "--color-base-secondary",
      generalColor.baseSecondary
    );

    //Box shadow
    document.documentElement.style.setProperty("--box-shadow", boxShadow);

    //Font size
    document.documentElement.style.setProperty("--font-size", fontSize + "px");
  }, [backgroundColor, generalColor, fontSize, boxShadow]);

  return (
    <div className="flex w-[1265px] mx-auto">
      {modal && <Modal />}
      <Sidebar />
      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[color:var(--background-tertiary)]">
          <Outlet />
        </main>
        <Rightbar />
      </main>
    </div>
  );
}

export default MainLayout;
