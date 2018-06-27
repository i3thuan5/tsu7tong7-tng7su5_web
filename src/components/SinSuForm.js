import React from 'react'


const SinSuForm = ({onKe, onTshing}) => {

  let hanInput, loInput

  return (
  <form className="ui form">
    <div className="field">
    <label>自定義辭典</label>
    <div className="three fields">
      <div className="field">
        <input ref={(node) => hanInput = node} placeholder="漢字、羅馬字"/>
      </div>
      <div className="field">
        <input ref={(node) => loInput = node} placeholder="（選填）漢字對應的拼音"/>
      </div>
      <div className="field">
        <button className="ui teal button"
          onClick={
          (e) => {
            e.preventDefault()
            onKe(hanInput.value, loInput.value)
        }}>加一詞</button>
        <button className="ui teal button"
          onClick={
          (e) => {
            e.preventDefault()
            onTshing()
        }}>清空辭典</button>
      </div>
    </div>
  </div>

  </form>
)}


export default SinSuForm
