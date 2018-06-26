import React from 'react'


const SinSuForm = ({onKe, onTshing}) => {

  let hanInput, loInput

  return (
  <form className="ui form">
    <input ref={(node) => hanInput = node}/>
    <input ref={(node) => loInput = node}/>
    <button onClick={
      (e) => {
        e.preventDefault()
        onKe(hanInput.value, loInput.value)
    }}>加一詞</button>
    <button onClick={
      (e) => {
        e.preventDefault()
        onTshing()
    }}>清空辭典</button>
  </form>
)}


export default SinSuForm
