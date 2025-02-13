import PropTypes from "prop-types";
import "../../index.css";

export default function FormStepButtons({
  btnOneText,
  btnTwoText,
  clickfunction,
  btnOneClick,
}) {
  return (
    <div className="form-buttons">
      <button className="btn-one form-button" onClick={btnOneClick}>
        {btnOneText}
      </button>
      <button className="btn-two form-button" onClick={clickfunction}>
        {btnTwoText}
      </button>
    </div>
  );
}

FormStepButtons.propTypes = {
  btnOneText: PropTypes.string.isRequired,
  btnTwoText: PropTypes.string.isRequired,
  clickfunction: PropTypes.func,
  btnOneClick: PropTypes.func,
};
