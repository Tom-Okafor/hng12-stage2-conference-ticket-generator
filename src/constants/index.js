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

export const aboutPageText = `Event Ticket Booking UI – Open Source Practice Project 🎟️

Overview

This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone, explore, and build upon. The design focuses on a seamless, login-free ticket reservation flow, allowing users to book event tickets quickly and efficiently.

The project consists of a three-step ticket booking flow, and developers can extend it further by integrating payment solutions, user authentication (optional), and ticket validation systems.

Flow & Features

1️⃣ Ticket Selection
	•	Users can browse available tickets (Free & Paid).
	•	Ticket options are displayed in a list or card view.
	•	For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee details.
	•	For Paid Tickets → Clicking “Purchase Ticket” would ideally open a payment modal.

2️⃣ Attendee Details Form
	•	Users input their Name, Email, and optional Phone Number.
	•	Profile picture upload option with preview functionality.
	•	Ticket summary is visible to ensure users review their details before submission.

3️⃣ Payment or Success Page
	•	If the ticket is free, the user is taken directly to the Ticket Confirmation Page.
	•	If the ticket is paid, developers can integrate Stripe, Paystack, or Flutterwave to process payments before showing the confirmation page.
	•	Upon successful booking, users should receive:
	•	A visual ticket preview with a unique QR Code.
	•	An option to download the ticket as PDF or save it to their device.
	•	An email confirmation containing ticket details.
How to Build This 🚀

This UI can be implemented using:

📌 Frontend (Next.js or React)
	•	Component Breakdown:
	•	TicketCard.tsx → Displays ticket details
	•	AttendeeForm.tsx → Captures user details
	•	PaymentModal.tsx → Handles payment processing
	•	SuccessScreen.tsx → Shows the final ticket preview
	•	State Management: React’s Context API, Zustand, or Redux (if needed).
	•	File Handling: Users should be able to upload images (profile picture for ticket) using Firebase Storage, Cloudinary, or local preview with URL.createObjectURL().

📌 Backend (Optional)
	•	If persistence is required, a backend can be built using:
	•	Node.js & Express or Firebase Functions
	•	Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket records

📌 Payment Integration
	•	For paid events, developers should integrate:
	•	Stripe Checkout (for international transactions)
	•	Paystack or Flutterwave (for African users)
What You’ll Learn 🧑‍💻
	•	File handling & validation (profile picture uploads).
	•	Dynamic UI updates based on ticket selection.
	•	Persisting bookings using local state or a backend.
	•	Integrating payment gateways for ticket purchases.
	•	Generating & validating QR Codes for event check-in (Advanced).
Need Help? Reach Out! 💬`;
