import PropTypes from "prop-types";

export default function FormOptionButton({
  price,
  name,
  ticketsLeft,
  id,
  func,
  clickedId,
  ref,
}) {
  return (
    <button
      className={`form-option ${id === clickedId ? "selected" : ""}`}
      id={id}
      ref={ref}
      onClick={() => {
        func(id);
      }}
    >
      <div className="form-option-category">
        <p className="form-option-price">{price}</p>
        <div className="form-option-details">
          <p className="category-name">{name}</p>
          <p className="available-tickets">{ticketsLeft}</p>
        </div>
      </div>
    </button>
  );
}

FormOptionButton.propTypes = {
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ticketsLeft: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  func: PropTypes.func,
  clickedId: PropTypes.any,
  ref: PropTypes.any,
};
