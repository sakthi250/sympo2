import { useState } from "react";
import { Modal } from "react-bootstrap";

import "./Event.css";

const eventsData = {
  Technical: [
    {
      name: "CodeQuest",
      src: "coding.jpg",
      description: "This coding contest is designed to test participants' programming knowledge, problem-solving abilities, and debugging skills through a series of challenging rounds. Teams of two contestants will compete, progressing through three rounds of increasing difficulty.",
    },
    {
      name: "Tech Tackle",
      src: "quiz.jpg",
      description: "Name the legends, Guess the greats, solve tricky puzzles, and ace the tech quiz! Show off your reasoning and technical brilliance!  Three rounds. One champion. Will you rise to the top?”",
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
      description: "In Cut And Frame (Video Editing) there are mainly two rounds in this event.  1st Round Each individual will be assigned a specific theme. The video should have a duration of 2-3 minutes and must be exported . The allotted time for video editing is 30 minutes.  2nd Round  A common theme will be provided to all participants selected from the first round. The video should be 4-5 minutes in duration and must be exported . The allocated time for editing the video is 20 minutes",
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
          <Modal.Footer className="text-white card-color d-flex justify-content-center">
            <p>{selectedEvent?.description}</p>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Events;