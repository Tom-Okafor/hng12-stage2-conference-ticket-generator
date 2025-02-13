const scrollTo = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export function formDetailsReducer(state, action) {
  switch (action.type) {
    case "stepIncrement":
      scrollTo();
      return { ...state, currentStep: state.currentStep + 1 };
    case "decrease step":
      scrollTo();
      return { ...state, currentStep: state.currentStep - 1 };
    case "select ticket type":
      return { ...state, ticketType: action.payload };
  }
}
