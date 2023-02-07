import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

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

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onOverlayClick: PropTypes.func.isRequired
};

export default Modal