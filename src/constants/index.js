const loadTicketsFromLocalStorage = () => {
  try {
    const serializedTickets = localStorage.getItem("tickets");
    return serializedTickets ? JSON.parse(serializedTickets) : [];
  } catch (error) {
    console.error("Failed to load tickets:", error);
    return [];
  }
};

export const initialState = {
  currentStep: !isNaN(parseInt(localStorage.currentStep))
    ? parseInt(localStorage.currentStep)
    : 1,
  ticketQuantity: !isNaN(parseInt(localStorage.ticketQuantity))
    ? parseInt(localStorage.ticketQuantity)
    : 1,
  ticketType: localStorage.ticketType || "Regular",
  name: localStorage.name || "",
  email: localStorage.email || "",
  specialRequest: localStorage.specialRequest || "",
  imageLink: localStorage.imageLink || null,
  imageError: localStorage.imageError || null,
  nameError: localStorage.nameError || null,
  emailError: localStorage.emailError || null,
  loadingMessage: null,
  clickedButtonId: !isNaN(parseInt(localStorage.clickedButtonId))
    ? parseInt(localStorage.clickedButtonId)
    : 1,
  tickets: loadTicketsFromLocalStorage(),
  regularTicketsLeft: !isNaN(parseInt(localStorage.regularTicketsLeft))
    ? parseInt(localStorage.regularTicketsLeft)
    : 20,
  VIPTicketsLeft: !isNaN(parseInt(localStorage.VIPTicketsLeft))
    ? parseInt(localStorage.VIPTicketsLeft)
    : 20,
  VVIPTicketsLeft: !isNaN(parseInt(localStorage.VVIPTicketsLeft))
    ? parseInt(localStorage.VVIPTicketsLeft)
    : 20,
};
