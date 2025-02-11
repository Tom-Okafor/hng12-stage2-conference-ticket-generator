export default function FormInput() {
  return (
    <div className="form-input" aria-labelledby="select-label">
      <label htmlFor="select" id="select-label">
        Number of Tickets
      </label>
      <input
        type="text"
        name="tickets"
        id="select-tickets"
        list="ticket-quantity"
      />
      <datalist id="ticket-quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </datalist>
    </div>
  );
}
