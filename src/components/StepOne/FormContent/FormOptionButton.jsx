import PropTypes from "prop-types";

export default function FormOptionButton({ text, id, func, clickedId }) {
  return (
    <button
      className={`form-option ${id === clickedId ? "selected" : ""}`}
      id={id}
      onClick={() => {
        func(id);
      }}
    >
      {text}
      
    </button>
  );
}

FormOptionButton.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  func: PropTypes.func,
  clickedId: PropTypes.any,
};
