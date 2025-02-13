import React, { useState, useEffect } from "react";

const Cse = () => {
  const text = "Department of Computer Science \n and Engineering"; // Line break
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 60 : 90; // Typing & deleting speed

    const timeout = setTimeout(() => {
      setDisplayText(text.substring(0, index).replace(/\n/g, "\u200B<br/>"));

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
    <h1
      style={{
        fontSize: "clamp(1.2rem, 5vw, 3rem)", // Responsive font size
        fontWeight: "bold",
        textAlign: "center",
        textShadow: "2px 2px 10px #ff6600",
        whiteSpace: "pre-line", // Important for line breaks
        overflow: "hidden",
        maxWidth: "90%", // Limits width for responsiveness
        margin: "auto", // Centers the text
      }}
      dangerouslySetInnerHTML={{ __html: displayText.replace(/\n/g, "<br/>") }} // Converts \n to actual line breaks
    />
  );
};

export default Cse;
