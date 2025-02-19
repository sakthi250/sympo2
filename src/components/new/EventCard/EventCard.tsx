import React from 'react';
import styled from 'styled-components';
import {useState} from 'react'
interface Props {
  eventName: string;
  eventTime: string;
  eventLocation: string;
  events: string[];
}

const EventCard = ({ eventName, eventTime, eventLocation, events }: Props) => {
  return (
    <StyledWrapper>
      <div className="book">
        <div>
          {events.map((event,i) => (
            <p key={i} style={{ fontWeight: 'bold' ,textAlign:"left"}}>{event}</p>
          ))}
        </div>
        <div className="cover">
          <h2 className="eventName">{eventName}</h2>
          <p className="eventTime">{eventTime}</p>
          <p className="eventLocation">{eventLocation}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .eventName {
    font-size: 200%;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ffcc00;
  }

  .eventTime,
  .eventLocation {
    font-size: 16px;
    margin: 5px 0; /* Adds space between event time and location */
    color: white;
  }

  .book {
    position: relative;
    border-radius: 10px;
    width: 400px;
    height: 300px;
    background-color:rgb(255, 255, 255);
    box-shadow: 1px 1px 12px #000;
    transform: preserve-3d;
    perspective: 2000px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
  }

  .cover {
    top: 0;
    position: absolute;
    background-color: #00b2a6;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s;
    transform-origin: 0;
    box-shadow: 1px 1px 12px #000;
    display: flex;
    flex-direction: column; /* This makes sure that the text is stacked vertically */
    align-items: center;
    justify-content: center;
    padding: 20px; /* Adds space around the content */
    overflow: hidden; /* Prevents the folded part from overflowing */
  }

  .book:hover .cover {
    transform: rotateY(-80deg);
  }

  /* Folded top-right corner effect */
  .cover::after {
    content: '';
    position: absolute;
    top: -40px;
    right: -40px;
    width: 80px;
    height: 80px;
    background-color:rgb(255, 255, 255);
    border-radius: 20%;
    box-shadow: 4px 4px 1px rgba(0, 0, 0, 0.8);
    transition: opacity 0.3s ease;
  }

  /* Make the corner invisible when the cover is flipped */
  .book:hover .cover::after {
    opacity: 0;
  }
`;

export default EventCard;
