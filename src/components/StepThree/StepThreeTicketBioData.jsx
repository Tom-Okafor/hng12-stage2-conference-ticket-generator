import "../../styles/StepThreeStyles/StepThreeTicketBioData.css";

export default function StepThreeTicketBioData() {
  return (
    <div className="bio-data">
      <div className="ticket-data-container">
        <div className="ticket-data">
          <p className="caption">Enter your name</p>
          <p className="data">Avi Chukwu</p>
        </div>
        <div className="ticket-data">
          <p className="caption">Enter your email</p>
          <p className="data">User@email.com</p>
        </div>
        <div className="ticket-data">
          <p className="caption">Ticket Type:</p>
          <p className="data-type">VIP</p>
        </div>
        <div className="ticket-data">
          <p className="caption">Ticket for:</p>
          <p className="data-type">1</p>
        </div>
        <div className="ticket-data">
          <p className="caption">Special request?</p>
          <p className="data-type">
            Nil ? Or the users sad story they write in there gets this whole
            space, Max of three rows
          </p>
        </div>
      </div>
    </div>
  );
}
