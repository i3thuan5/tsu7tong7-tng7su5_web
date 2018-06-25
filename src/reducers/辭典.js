import { combineReducers } from 'redux'
import {
  KE_SUTIAN,
  THAI_SUTIAN,
  TSHING_SUTIAN,
  ERROR_SUTIAN
} from '../actions/辭典'


const 初始狀態 = {
  辭典表: [],
  錯誤訊息: null
}


const 加詞 = (state, action) => {
  return {
    辭典表: [...state.辭典表, action.新詞],
    錯誤訊息: null
  }
}

const THAI詞 = (state, action) => ({
  辭典表: state.辭典表.filter((ele, index)=> index !== action.id),
  錯誤訊息: state.錯誤訊息
})

export const suTianReducer = (prevState=初始狀態, action) => {
  switch(action.type){
    case KE_SUTIAN:
      return 加詞(prevState, action)
    case THAI_SUTIAN:
      return THAI詞(prevState, action)
    case TSHING_SUTIAN:
      return 初始狀態;
    default:
      return prevState;
  }
}


export default suTianReducer;
