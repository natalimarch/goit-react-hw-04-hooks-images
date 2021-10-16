import styles from "../Modal/Modal.module.css";
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modal = document.querySelector("#modal-root");

const Modal = ({ onClose, children }) => {
  const onEsc = useCallback(
    (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  const onBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("keydown", onEsc);
    };
  }, [onEsc]);

  return createPortal(
    <div className={styles.Overlay} onClick={onBackdrop}>
      <div className={styles.Modal}>{children}</div>
    </div>,
    modal
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.onEsc);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.onEsc);
//   }

//   onEsc = (e) => {
//     if (e.code === "Escape") {
//       this.props.onClose();
//     }
//   };

//   onBackdrop = (e) => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { children } = this.props;
//     return createPortal(
//       <div className={styles.Overlay} onClick={this.onBackdrop}>
//         <div className={styles.Modal}>{children}</div>
//       </div>,
//       modal
//     );
//   }
// }
