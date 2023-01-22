import React, { useRef, useEffect } from 'react';
import './style.css'

function CustomCursor() {
  // Create a ref to the cursor element
  const cursor = useRef(null);

  // Update the position of the cursor element based on the mouse position
  useEffect(() => {
    const updateCursorPosition = (event) => {
      cursor.current.style.top = `${event.clientY}px`;
      cursor.current.style.left = `${event.clientX}px`;
    };

    // Add an event listener to track the mouse position
    document.addEventListener('mousemove', updateCursorPosition);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []); // The empty array ensures that the effect only runs once

  return (
    <div className="cursor-follower">
      {/* The cursor element */}
      <div ref={cursor} className="cursor hidden sm:flex" />
    </div>
  );
}

export default CustomCursor
