import { combineReducers } from 'redux'
import tshaReducer from './查'
import suTianReducer from './辭典'

export default combineReducers({
  查: tshaReducer,
  辭典: suTianReducer
})
