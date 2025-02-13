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
    case "set image loading":
      return {
        ...state,
        imageError: null,
        loadingMessage: "Setting your image...",
      };
  }
}
