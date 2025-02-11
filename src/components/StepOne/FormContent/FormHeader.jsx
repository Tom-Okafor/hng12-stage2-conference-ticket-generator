import PropTypes from "prop-types";

export default function FormHeader({ title, step }) {
  return (
    <div className="form-header">
      <div className="form-header-text-content">
        <p className="form-header-title">{title}</p>
        <p className="form-header-steps-counter">Step {step}/3</p>
      </div>
      <div className="form-header-progress">
        <div
          className="form-header-progress-bar"
          style={{ width: `${(step / 3) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};
