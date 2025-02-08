import { useState } from "react";
import { Modal } from "react-bootstrap";

import "./Event.css";

const eventsData = {
  Technical: [
    {
      name: "CodeQuest",
      src: "coding.jpg",
      description: "A coding marathon for the best minds.",
    },
    {
      name: "QuizTime Classics",
      src: "quiz.jpg",
      description: "A trivia challenge with a cinematic twist.",
    },
    {
      name: "Paper Reel",
      src: "paper.webp",
      description: "Showcase your research and presentation skills.",
    },
    {
      name: "RetroPoster Jam",
      src: "poster.jpg",
      description: "Design vintage-style posters with a tech touch.",
    },
    {
      name: "Cut and Frame",
      src: "video.jpg",
      description: "A video editing contest for film enthusiasts.",
    },
    {
      name: "Screen Test",
      src: "mock.webp",
      description: "Test your screenwriting and storytelling skills.",
    },
  ],
  "Non-Technical": [
    {
      name: "RetroRoom",
      src: "room.webp",
      description: "Step into a retro-themed escape room.",
    },
    {
      name: "MindLink",
      src: "mindlink.jpg",
      description: "A mind-bending puzzle challenge.",
    },
    {
      name: "Bidding War",
      src: "bididng.jpg",
      description: "An auction-based strategy game.",
    },
    {
      name: "Ultimate Hustle",
      src: "multi.avif",
      description: "A game of negotiation and persuasion.",
    },
    {
      name: "Culinary Alchemy",
      src: "flame.avif",
      description: "A fusion of cooking and chemistry.",
    },
    {
      name: "CineSprint",
      src: "wall.jpg",
      description: "A cinematic treasure hunt.",
    },
  ],
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState("All");

  return (
    <div className="container-fluid py-5 bg-dark text-white min-vh-100">
      <h2 className="text-center mb-4 display-4 neon-text default-cursor">
        Events
      </h2>

      {/* Filter Buttons */}
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

      {/* Display Events Based on Filter */}
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null
      )}

      {/* Modal for Selected Event */}
      {selectedEvent && (
        <Modal
          show={!!selectedEvent}
          onHide={() => setSelectedEvent(null)}
          centered
        >
          <Modal.Header closeButton className="text-white card-color">
            <Modal.Title>{selectedEvent?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Footer className="text-white card-color d-flex justify-content-center">
            <p>{selectedEvent?.description}</p>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Events;
