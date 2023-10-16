import { useModal } from "../contexts/modalContext";
import modals from "./modals";

function Modal() {
  const { modal } = useModal();
  const currentModal = modals.find((m) => m.name === modal.name);

  return (
    <div className="fixed inset-0 bg-[color:var(--background-modal)] flex items-center justify-center z-50">
      <div className="bg-[color:var(--background-primary)] max-w-[600px] max-h-[90vh] overflow-auto rounded-2xl">
        {currentModal && <currentModal.element />}
      </div>
    </div>
  );
}

export default Modal;
