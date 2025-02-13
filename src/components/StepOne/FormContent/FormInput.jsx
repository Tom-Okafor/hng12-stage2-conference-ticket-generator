import { useContext, useEffect } from "react";
import { FormDetailsContext } from "../../../context/FormDetailsContext";

export default function FormInput() {
  // const [formInputError, setFormInputError] = useState(false);
  const {
    state: {
      ticketQuantity,
      ticketType,
      VVIPTicketsLeft,
      VIPTicketsLeft,
      regularTicketsLeft,
    },
    dispatch,
  } = useContext(FormDetailsContext);
  const handleInputChange = (event) => {
    const {
      target: { value },
    } = event;
    dispatch({ type: "select ticket quantity", payload: value });
  };

  useEffect(() => {
    dispatch({ type: "reset ticket quantity" });
  }, [ticketType, dispatch]);

  // function assignTicketQuantity(value) {
  //   if (checkTicketAvailability()) {
  //     setFormInputError(false);
  //   } else {
  //     setFormInputError(true);
  //   }
  // }

  // function checkTicketAvailability() {
  //   if (ticketType === "Regular" && regularTicketsLeft >= ticketQuantity) {
  //     return true;
  //   }
  //   if (ticketType === "VIP" && VIPTicketsLeft >= ticketQuantity) {
  //     return true;
  //   }
  //   if (ticketType === "VVIP" && VVIPTicketsLeft >= ticketQuantity) {
  //     return true;
  //   }
  //   return false;
  // }
  return (
    <div className="form-input" aria-labelledby="select-label">
      <label htmlFor="select" id="select-label">
        Number of Tickets
      </label>
      {ticketType === "Regular" ? (
        <select
          name="tickets"
          id="select-tickets"
          value={ticketQuantity}
          onChange={(event) => {
            handleInputChange(event);
          }}
        >
          <option value="1" disabled={regularTicketsLeft < 1}>
            1
          </option>
          <option value="2" disabled={regularTicketsLeft < 2}>
            2
          </option>
          <option value="3" disabled={regularTicketsLeft < 3}>
            3
          </option>
          <option value="4" disabled={regularTicketsLeft < 4}>
            4
          </option>
          <option value="5" disabled={regularTicketsLeft < 5}>
            5
          </option>
        </select>
      ) : ticketType === "VIP" ? (
        <select
          name="tickets"
          id="select-tickets"
          value={ticketQuantity}
          onChange={(event) => {
            handleInputChange(event);
          }}
        >
          <option value="1" disabled={VIPTicketsLeft < 1}>
            1
          </option>
          <option value="2" disabled={VIPTicketsLeft < 2}>
            2
          </option>
          <option value="3" disabled={VIPTicketsLeft < 3}>
            3
          </option>
          <option value="4" disabled={VIPTicketsLeft < 4}>
            4
          </option>
          <option value="5" disabled={VIPTicketsLeft < 5}>
            5
          </option>
        </select>
      ) : (
        ticketType === "VVIP" && (
          <select
            name="tickets"
            id="select-tickets"
            value={ticketQuantity}
            onChange={(event) => {
              handleInputChange(event);
            }}
          >
            <option value="1" disabled={VVIPTicketsLeft < 1}>
              1
            </option>
            <option value="2" disabled={VVIPTicketsLeft < 2}>
              2
            </option>
            <option value="3" disabled={VVIPTicketsLeft < 3}>
              3
            </option>
            <option value="4" disabled={VVIPTicketsLeft < 4}>
              4
            </option>
            <option value="5" disabled={VVIPTicketsLeft < 5}>
              5
            </option>
          </select>
        )
      )}

      {/* {formInputError && (
        <p className="formInputError">Not enough tickets available</p>
      )} */}
    </div>
  );
}
