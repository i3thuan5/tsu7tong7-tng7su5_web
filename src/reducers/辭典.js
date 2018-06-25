import {
  KE_SUTIAN,
  THAI_SUTIAN,
  TSHING_SUTIAN
} from '../actions/辭典'

const 加詞 = (state, action) => {
  let 新詞 = []
  if(action.漢字) 新詞.push(action.漢字)
  if(action.羅馬字) 新詞.push(action.羅馬字)
  return [...state, 新詞]
}

const THAI詞 = (state, action) =>
  state.filter((ele, index)=> index !== action.id)


const suTianReducer = (prevState=[], action) => {
  switch(action.type){
    case KE_SUTIAN:
      return 加詞(prevState, action)
    case THAI_SUTIAN:
      return THAI詞(prevState, action)
    case TSHING_SUTIAN:
      return [];
    default:
      return prevState;
  }
}


export default suTianReducer;
