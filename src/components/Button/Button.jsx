import styles from "../Button/Button.module.css";
import PropTypes from "prop-types";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={styles.Btn}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
