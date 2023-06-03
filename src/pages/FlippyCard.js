import React, { useState } from 'react';
import './Flippy.css';

const FlippyCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flippy-card ${isFlipped ? 'flipped' : ''}`} onMouseLeave={handleFlip}>
      <div className="card-front">
        {frontContent}
      </div>
      <div className="card-back">
        {backContent}
      </div>
    </div>
  );
};

export default FlippyCard;
