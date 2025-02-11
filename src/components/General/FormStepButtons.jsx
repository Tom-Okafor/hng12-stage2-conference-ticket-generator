import PropTypes from "prop-types";
import "../../index.css";

export default function FormStepButtons({ btnOneText, btnTwoText }) {
  return (
    <div className="form-buttons">
      <button className="btn-one form-button">{btnOneText}</button>
      <button className="btn-two form-button">{btnTwoText}</button>
    </div>
  );
}

FormStepButtons.propTypes = {
  btnOneText: PropTypes.string.isRequired,
  btnTwoText: PropTypes.string.isRequired,
};
