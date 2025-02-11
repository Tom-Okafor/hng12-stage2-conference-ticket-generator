import PropTypes from "prop-types";

export default function FormOptionButton({ price, name, ticketsLeft, id, func, clickedId }) {
  return (
    <button
      className={`form-option ${id === clickedId ? "selected" : ""}`}
      id={id}
      onClick={() => {
        func(id);
      }}
    >
      <div className="form-option-category">
        <p className="category-name">{name}</p>
        <p className="available-tickets">{ticketsLeft}</p>
      </div>
      <p className="form-option-price">{price}</p>

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
};
