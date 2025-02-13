import Header from "../../components/General/Header";
import { useContext } from "react";
import { FormDetailsContext } from "../../context/FormDetailsContext";
import StepThreeTicket from "../../components/StepThree/StepThreeTicket";
import "../../index.css";
export default function Tickets() {
  const {
    state: { tickets },
  } = useContext(FormDetailsContext);
  let ticketData;
  if (typeof tickets === "string") {
    ticketData = JSON.parse(tickets);
  } else {
    ticketData = tickets;
  }
  return (
    <main className="tickets">
      <Header />
      <div className="tickets-container">
        {ticketData.length === 0 && (
          <p className="tickets-container-text">
            Your generated tickets will be displayed here. You do not have any
            tickets at the moment.
          </p>
        )}

        {ticketData &&
          ticketData.map(
            (elem, index) =>
              elem.imageLink && (
                <StepThreeTicket key={index} ticketData={elem} />
              )
          )}
      </div>
    </main>
  );
}
