import ReactDOM from "react-dom";
import { Backdrop } from "./Backdrop/styles";
import ModalContainer from "./ModalContainer";

// Modal portal root
// in the static index.html file
const modalRoot: HTMLElement = document.getElementById("modal-root")!;

interface Props {
  // This should be the function
  // that makes the boolean value to false
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onClose} />, modalRoot)}
      {ReactDOM.createPortal(
        <ModalContainer onClose={onClose}>{children}</ModalContainer>,
        modalRoot
      )}
    </>
  );
};

export default Modal;
