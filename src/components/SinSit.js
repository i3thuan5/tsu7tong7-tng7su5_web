import React from 'react';

const SinSit = ({訊息, 樣式='negative'}) =>
  <div className={`ui ${樣式} message`}>
    <p>{訊息}</p>
  </div>

export default SinSit;
