import React from 'react'
import { connect } from 'react-redux'
import {
  keSuTian,
  tshingSuTian
} from '../actions/辭典'


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

const mapDispatchToProps = dispatch => ({
  onKe: (han, lo) => dispatch(keSuTian(han, lo)),
  onTshing: () => dispatch(tshingSuTian()),
})

const KeSinSu = connect(null, mapDispatchToProps)(SinSuForm)

export default KeSinSu
