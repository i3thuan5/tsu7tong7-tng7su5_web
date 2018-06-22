import React from 'react';
import { connect } from 'react-redux';
import { Block } from 'demo-ui';
import { 查 } from '../actions';


const 計算按鈕樣式 = 正在查 =>
  `ui huge primary right floated button ${正在查 ? "disabled" : ""}`

const mapStateToProps = state => ({
  buttonStyle: 計算按鈕樣式(state.查.正在查)
})

let Tsha = ({buttonStyle, dispatch}) => {
  let input;

  return (
  <form className='ui form'
    onSubmit={(e) => {
      e.preventDefault();
      if(!input)return;
      dispatch(查(input.value));
    }}>

    <Block>
      <textarea
        ref={node => {input=node}}
        rows='3'
        placeholder='教育部漢字、臺羅、POJ'
        defaultValue=''/>
    </Block>

    <div className="app clearing">
      <button className={buttonStyle} type='submit'>斷詞</button>
    </div>

</form>
)}


Tsha = connect(mapStateToProps)(Tsha);

export default Tsha;
