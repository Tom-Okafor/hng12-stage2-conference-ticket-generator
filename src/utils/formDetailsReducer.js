const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export function formDetailsReducer(state, action) {
  const { type, payload } = action;

  // Always scroll to top for step changes
  if (type === "stepIncrement" || type === "decrease step") {
    scrollToTop();
  }

  switch (type) {
    case "stepIncrement":
      localStorage.currentStep = state.currentStep + 1;
      return { ...state, currentStep: state.currentStep + 1 };
    case "decrease step":
      localStorage.currentStep = state.currentStep - 1;
      return { ...state, currentStep: state.currentStep - 1 };
    case "select ticket type":
      localStorage.ticketType = payload;
      return { ...state, ticketType: payload };
    case "select ticket quantity":
      localStorage.ticketQuantity = payload;
      return { ...state, ticketQuantity: payload };
    case "set image link":
      localStorage.removeItem("imageError");
      localStorage.imageLink = payload;
      return {
        ...state,
        imageError: null,
        loadingMessage: null,
        imageLink: payload,
      };
    case "set image error":
      localStorage.imageError = payload;
      return { ...state, imageError: payload, loadingMessage: null };
    case "set name error":
      localStorage.nameError = payload;
      return { ...state, nameError: payload };
    case "set email error":
      localStorage.emailError = payload;
      return { ...state, emailError: payload };
    case "clear name error":
      localStorage.removeItem("nameError");
      return { ...state, nameError: null };
    case "clear email error":
      localStorage.removeItem("emailError");
      return { ...state, emailError: null };
    case "clear image error":
      localStorage.removeItem("imageError");
      return { ...state, imageError: null };
    case "clear errors":
      localStorage.removeItem("emailError");
      localStorage.removeItem("nameError");
      return { ...state, emailError: null, nameError: null };
    case "set image loading":
      return {
        ...state,
        imageError: null,
        loadingMessage: "Setting your image...",
      };
    case "set email":
      localStorage.email = payload;
      return { ...state, email: payload };
    case "set name":
      localStorage.name = payload;
      return { ...state, name: payload };
    case "set request":
      localStorage.specialRequest = payload;
      return { ...state, specialRequest: payload };
    case "set clicked button id":
      localStorage.clickedButtonId = payload;
      return { ...state, clickedButtonId: payload };
    case "add ticket": {
      const saveTicketsToLocalStorage = (tickets) => {
        try {
          localStorage.setItem("tickets", JSON.stringify(tickets));
        } catch (error) {
          console.error("Failed to save tickets:", error);
        }
      };
      const newTicket = {
        imageLink: state.imageLink,
        name: state.name,
        email: state.email,
        ticketQuantity: state.ticketQuantity,
        ticketType: state.ticketType,
        specialRequest: state.specialRequest,
      };

      const updatedTickets = [...state.tickets, newTicket];

      saveTicketsToLocalStorage(updatedTickets);

      return {
        ...state,
        tickets: updatedTickets,
      };
    }
    case "reset": {
      const keysToRemove = [
        "currentStep",
        "ticketQuantity",
        "ticketType",
        "name",
        "email",
        "specialRequest",
        "imageLink",
        "imageError",
        "nameError",
        "emailError",
        "clickedButtonId",
      ];

      keysToRemove.forEach((key) => localStorage.removeItem(key));

      return {
        ...state,
        currentStep: 1,
        ticketQuantity: 1,
        ticketType: "Regular",
        name: "",
        email: "",
        specialRequest: "",
        imageLink: null,
        imageError: null,
        nameError: null,
        emailError: null,
        loadingMessage: null,
        clickedButtonId: 1,
      };
    }
    case "set available tickets":
      if (state.ticketType === "Regular") {
        localStorage.regularTicketsLeft = JSON.stringify(
          state.regularTicketsLeft - state.ticketQuantity
        );
        return {
          ...state,
          regularTicketsLeft: state.regularTicketsLeft - state.ticketQuantity,
        };
      } else if (state.ticketType === "VIP") {
        localStorage.VIPTicketsLeft = JSON.stringify(
          state.VIPTicketsLeft - state.ticketQuantity
        );
        return {
          ...state,
          VIPTicketsLeft: state.VIPTicketsLeft - state.ticketQuantity,
        };
      } else if (state.ticketType === "VVIP") {
        localStorage.VVIPTicketsLeft = JSON.stringify(
          state.VVIPTicketsLeft - state.ticketQuantity
        );
        return {
          ...state,
          VVIPTicketsLeft: state.VVIPTicketsLeft - state.ticketQuantity,
        };
      }
      break;
    case "reset ticket quantity":
      return { ...state, ticketQuantity: 1 };
    default:
      console.warn(`Unknown action type: ${type}`);
      return state;
  }
}
