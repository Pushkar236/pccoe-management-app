import React from 'react';
import './CustomScrollBar.css'; // Ensure to import your custom styles

const ScrollableComponent = () => {
  return (
    <div className="scrollable-container">
      {/* Content that might overflow */}
      <h2>Scrollable Content</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      {/* Repeat or add more content to test scrolling */}
      <div style={{ height: '800px', background: 'lightgray' }}>
        <p>This content is long enough to cause scrolling.</p>
        {/* More content */}
      </div>
    </div>
  );
};

export default ScrollableComponent;
