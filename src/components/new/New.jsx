import { useState, useEffect } from "react";
import Cam from "./Cam";
import Pop from "./Pop";
import "./index.css";
import Cse from "./Cse";
import Ticket from "./Ticket";

const New = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-02-26T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const events = [
    {
      name: "Technical Events",
      time: "10:00 AM - 12:00 PM",
      location: "Classroom A",
    },
    { name: "Lunch", time: "12:00 PM - 1:00 PM", location: "Canteen" },
    {
      name: "Non-Technical Events",
      time: "1:00 PM - 3:00 PM",
      location: "Classroom C",
    },
    {
      name: "Prize Distribution",
      time: "3:00 PM - 4:00 PM",
      location: "Auditorium",
    },
  ];

  return (
    <div className="new-home-con">
      <div className="new-home-con text-center">
        <img src="logo.svg" className="new-img" alt="Department Logo" />
        <Cse/>
        <h3 className="new-glowing-text m-2">
          Where Innovation Meets Silver Screen <br />
        </h3>

        <div className="countdownSection">
          <h2 className="countdownTitle">Symposium Starts In</h2>
          <div className="countdownTimer">
            <div className="timeBox">
              {timeLeft.days} <div>Days</div>
            </div>
            <div className="timeBox">
              {timeLeft.hours} <div>Hours</div>
            </div>
            <div className="timeBox">
              {timeLeft.minutes} <div>Minutes</div>
            </div>
            <div className="timeBox">
              {timeLeft.seconds} <div>Seconds</div>
            </div>
          </div>
          <h4 className="neon-text m-1">26 February 2025</h4>
        </div>

        <div className="new-img-con">
          <Cam />
          <h3 className="neon-text m-2">
            Join us for a spectacular journey into technology, creativity, and
            innovation, all wrapped in the charm of Retro Cinema.
          </h3>
          <Pop />
        </div>
        <div className="eventSchedule row d-flex justify-content-st">
         
          <h2 className="scheduleTitle">Event Schedule</h2>
        <Ticket/>
          <div className="eventsGrid col-4">
            {events.map((event, index) => (
              <div key={index} className="eventCard">
                <h3 className="eventName">{event.name}</h3>
                <p className="eventTime">🕒 {event.time}</p>
                <p className="eventLocation">📍 {event.location}</p>
              </div>
            ))}
          </div>
          <Ticket/>
        </div>
        <div className="mapSection">
          <h2 className="mapTitle">Find Us Here</h2>
          <div className="mapContainer">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.7180005198097!2d78.09827697362033!3d9.70509197804261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00d7ef1aa5f193%3A0x127c3281a7ee1d2c!2sSethu%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1739293802907!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="busSection">
          <div className="busImageContainer">
            <img src="/bus.avif" alt="Bus Route" className="busImage m-1" />
            <button className="btn btn-warning text-light">View Routes</button>
          </div>

          <div className="busText">
            <h2>Bus Routes</h2>
            <p>
              {`Need a ride to the symposium? We've got you covered! Check out our
              dedicated bus routes and timings to reach the event hassle-free.
              Click the button to view all available bus schedules.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
