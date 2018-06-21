import React from 'react';
import { Block } from 'demo-ui';

const TshaPio = ({onChange, onSubmit, buttonStyle}) => (
  <form className='ui form'
    onSubmit={onSubmit}>

    <Block>
      <textarea
        ref = {node => input=node}
        onChange={onChange}
        rows='3'
        placeholder='教育部漢字、臺羅、POJ'
        defaultValue=''/>
    </Block>

    <div className="app clearing">
      <button className={buttonStyle} type='submit'>斷詞</button>
    </div>

</form>
);


export default TshaPio;
