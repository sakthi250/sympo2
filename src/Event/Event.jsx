import { useState } from "react";
import { Modal } from "react-bootstrap";

import "./Event.css";

const eventsData = {
  Technical: [
    {
      name: "CodeQuest",
      src: "coding.jpg",
      description: "This coding contest is designed to test participants' programming knowledge, problem-solving abilities, and debugging skills through a series of challenging rounds. Teams of two contestants will compete, progressing through three rounds of increasing difficulty.",
      rulesPdf: "code.docx",
      link:"https://docs.google.com/document/d/1whbM0eHorWd03twwzyZVLw7wqDE3LOmq/view"
    },
    {
      name: "QuizTime Classics",
      src: "quiz.jpg",
      description: "Name the legends, Guess the greats, solve tricky puzzles, and ace the tech quiz! Show off your reasoning and technical brilliance! Three rounds. One champion. Will you rise to the top?",
      rulesPdf: "Tech_tackle.docx",
      link:"https://docs.google.com/document/d/1MPhuZzpjjhFlTfKR1F3NmstFsS1JrEBR"
    },
    {
      name: "Paper Reel",
      src: "paper.webp",
      description: "Showcase your research and presentation skills.",
      rulesPdf: "",
    },
    {
      name: "RetroPoster Jam",
      src: "poster.jpg",
      description: "Design vintage-style posters with a tech touch.",
      rulesPdf: "design.docx",
      link:"https://docs.google.com/document/d/17MTPjl3SHVDm6uQtaGw98hOzSn2rf2IY/view"
    },
    {
      name: "Cut and Frame",
      src: "video.jpg",
      description: "Edit videos under a time constraint with creative themes.",
      rulesPdf: "editing.pdf",
      link:"https://drive.google.com/file/d/1n4oEu_PCwnqu3OneAtHTagBcoDThKg3p/view"
    },
    {
      name: "Screen Test",
      src: "mock.webp",
      description: "Test your screenwriting and storytelling skills.",
      rulesPdf: "",
    },
  ],
  "Non-Technical": [
    {
      name: "Retro Room",
      src: "room.webp",
      description: "Step into a retro-themed escape room.",
      rulesPdf: "",
    },
    {
      name: "Games Bond",
      src: "mindlink.jpg",
      description: "A mind-bending puzzle challenge.",
      rulesPdf: "gamesbond.docx",
      link:"https://docs.google.com/document/d/1agPkQP8vPCUJ9w_6FNW9FyP-q0Cq14eQ/view"
    },
    {
      name: "Bidding War",
      src: "bididng.jpg",
      description: "An auction-based strategy game.",
      rulesPdf: "ipl.pdf",
      link:"https://drive.google.com/file/d/1BCt36Mp-B-gjQU5223yNvVISXnots-Tb/view"
    },
    {
      name: "Ultimate Hustle",
      src: "multi.avif",
      description: "A game of negotiation and persuasion.",
      rulesPdf: "multitasking.docx",
      link:"https://docs.google.com/document/d/1FZ56DFLVgAflwzc25YjOXMfBiBv7c_fS/view"
    },
    {
      name: "Cine Bites",
      src: "flame.avif",
      description: "A fusion of cooking and chemistry.",
      rulesPdf: "cook.docx",
      link:"https://docs.google.com/document/d/13ms8UQszr_71yqkJfwjGu8nIDhnPdoF3/view"
    },
    {
      name: "Flash Cinema",
      src: "wall.jpg",
      description: "A cinematic treasure hunt.",
      rulesPdf: "cinema.pdf",
      link:"https://drive.google.com/file/d/1XttqI785LO9g4_R2Ld3OqUt3EIOZtdQ0/view"
    },
  ],
};
const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState("All");

  const handleRulesClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="container-fluid py-5 bg-dark text-white min-vh-100">
      <h2 className="text-center mb-4 display-4 neon-text default-cursor mt-4">
        Events
      </h2>

      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group" role="group" aria-label="Filter Buttons">
          <button
            type="button"
            className={`btn ${
              filter === "All" ? "btn-warning" : "btn-outline-warning"
            }`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            type="button"
            className={`btn ${
              filter === "Technical" ? "btn-warning" : "btn-outline-warning"
            }`}
            onClick={() => setFilter("Technical")}
          >
            Technical
          </button>
          <button
            type="button"
            className={`btn ${
              filter === "Non-Technical" ? "btn-warning" : "btn-outline-warning"
            }`}
            onClick={() => setFilter("Non-Technical")}
          >
            Non-Technical
          </button>
        </div>
      </div>

      {Object.entries(eventsData).map(([category, events]) =>
        filter === "All" || filter === category ? (
          <div key={category}>
            <h3 className="my-4 neon-text default-cursor">{category} Events</h3>
            <div className="row">
              {events.map((event) => (
                <div key={event.name} className="col-12 col-sm-6 col-md-4 mb-4">
                  <div
                    className="card event-card text-white h-100"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <img
                      src={event.src}
                      className="card-img-top event-img"
                      alt={event.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{event.name}</h5>
                      <button
                        className="btn rules-btn"
                        onClick={(e) => {
                          e.stopPropagation(); 
                          handleRulesClick(event.link);
                        }}
                      >
                        Rules
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null
      )}

      {selectedEvent && (
        <Modal
          show={!!selectedEvent}
          onHide={() => setSelectedEvent(null)}
          centered
        >
          <Modal.Header closeButton className="text-white card-color">
            <Modal.Title>{selectedEvent?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Footer className="text-white card-color d-flex flex-column align-items-center">
            <p>{selectedEvent?.description}</p>
            <div className="d-flex gap-3">
              <button className="btn btn-light reg-btn">
                <a
                  href="https://forms.gle/VSGMukPKj6oRudyP8"
                  className="an rounded"
                >
                  Register
                </a>
              </button>
              <button
                className="btn rules-btn"
                onClick={() => handleRulesClick(selectedEvent.rulesPdf)}
              >
                Rules
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Events;
