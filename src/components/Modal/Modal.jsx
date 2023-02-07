import { createPortal } from "react-dom";

const Modal = ({ img, onOverlayClick }) => {
  return createPortal(
    <div className="Overlay" onClick={onOverlayClick}>
      <div className="Modal">
        <img src={img} alt="/" />
      </div>
    </div>, 
    document.getElementById('modal')
  );
};

export default Modal