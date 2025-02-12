
import React, { useState, useEffect } from "react";

const Cse = () => {
  const text = "\u200BDepartment of Computer Science"; // Invisible character
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 100 : 150; // Typing & deleting speed

    const timeout = setTimeout(() => {
      setDisplayText(text.substring(0, index));

      if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && index === 1) {
        setTimeout(() => setIsDeleting(false), 500); // Pause before retyping
      } else {
        setIndex((prevIndex) => prevIndex + (isDeleting ? -1 : 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <h1 style={{ 
      fontSize: "clamp(1.2rem, 5vw, 3rem)", // Responsive font size
      fontWeight: "bold", 
      textAlign: "center", 
      textShadow: "2px 2px 10px #ff6600", 
    //   borderRight: "3px solid orange", // Cursor effect
      whiteSpace: "nowrap",
      overflow: "hidden",
      maxWidth: "90%", // Limits width for responsiveness
      margin: "auto" // Centers the text
    }}>
      {displayText}
    </h1>
  );
};

export default Cse;

 