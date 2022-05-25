import PropTypes from "prop-types";
import "./Style/Button.scss";

const Button = ({ content }) => {
  return (
    <>
      <button className="Btn">{content}</button>
    </>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
