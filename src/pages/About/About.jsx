import Header from "../../components/General/Header";
import { aboutPageText } from "../../constants";

export default function About() {
  return (
    <main className="about" >
      <Header />
      <section className="about-content">
        <p className="about-text">{aboutPageText}</p>
        <p className="fun-text">💛 Enjoy</p>
        <div className="about-links">
          <a
            href="https://www.figma.com/community/file/1470800949188681164/event-ticket-booking-ui-open-source-practice-project"
            target="_blank"
            rel="noreferrer noopener"
          >
            Design File
          </a>
          <a
            href="https://github.com/Tom-Okafor/hng12-stage2-conference-ticket-generator"
            rel="noreferrer noopener"
            target="_blank"
          >
            Github Code
          </a>
        </div>
      </section>
    </main>
  );
}
