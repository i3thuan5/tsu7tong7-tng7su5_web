import React from 'react';

const SinSit = ({訊息, 樣式='negative'}) => {

  if(!訊息) return null

  return (
  <div className={`ui ${樣式} message`}>
    <p>{訊息}</p>
  </div>
)}

export default SinSit;
