export function formDetailsReducer(state, action) {
  switch (action.type) {
    case "stepIncrement":
      return { ...state, currentStep: state.currentStep + 1 };
  }
}
