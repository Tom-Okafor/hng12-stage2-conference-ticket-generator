const scrollTo = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export function formDetailsReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "stepIncrement":
      scrollTo();
      return { ...state, currentStep: state.currentStep + 1 };
    case "decrease step":
      scrollTo();
      return { ...state, currentStep: state.currentStep - 1 };
    case "select ticket type":
      return { ...state, ticketType: payload };
    case "select ticket quantity":
      return { ...state, ticketQuantity: payload };
    case "set image link":
      return {
        ...state,
        imageError: null,
        loadingMessage: null,
        imageLink: payload,
      };
    case "set image error":
      return { ...state, imageError: payload, loadingMessage: null };
    case "set name error":
      return { ...state, nameError: payload };
    case "set email error":
      return { ...state, emailError: payload };
    case "clear name error":
      return { ...state, nameError: null };
    case "clear email error":
      return { ...state, emailError: null };
    case "clear image error":
      return { ...state, imageError: null };
    case "clear errors":
      return { ...state, emailError: null, nameError: null };
    case "set image loading":
      return {
        ...state,
        imageError: null,
        loadingMessage: "Setting your image...",
      };
    case "set email":
      return { ...state, email: payload };
    case "set name":
      return { ...state, name: payload };
    case "set request":
      return { ...state, specialRequest: payload };
    case "set clicked button id":
      return { ...state, clickedButtonId: payload };
  }
}
