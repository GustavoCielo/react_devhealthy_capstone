import FloatButton from "../FloatButton";
import CloseIcon from "@material-ui/icons/Close";
import { ModalContainer } from "./style";
import { useModal } from "../../contexts/Modal";

const Modal = ({ children }) => {
  const { isVisible, handleModal } = useModal();

  return (
    <>
      {isVisible && (
        <ModalContainer>
          <div className="modal">
            <FloatButton
              icon={CloseIcon}
              title="Fechar"
              onClick={handleModal}
            />
            {children}
          </div>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
