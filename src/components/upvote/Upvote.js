import React, { useState, useEffect } from 'react';
import ArrowUpIcon from '../../assets/ArrowUpIcon';

import './Upvote.css';

const Upvote = ({ selected, toggleSelected, key }) => {
  const [arrowColor, setArrowColor] = useState('#343A40');
  const [backgroundColor, setBackgroundColor] = useState('upvoteUnselected');

  useEffect(() => {
    if (selected) {
      setArrowColor('#253CF2');
      setBackgroundColor('upvoteSelected');
    } else {
      setArrowColor('#343A40');
      setBackgroundColor('upvoteUnselected');
    }
  }, [selected]);

  return (
    <div
      id={key}
      data-testid={'upvote-button'}
      className={`upvoteContainer ${backgroundColor}`}
      onClick={toggleSelected}
    >
      <ArrowUpIcon fillColor={arrowColor} />
    </div>
  );
};

export default Upvote;
