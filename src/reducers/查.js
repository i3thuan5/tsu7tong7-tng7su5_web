import { ACTION_TSHA } from '../actions/查';

const 初始狀態 = {
  正在查: false,
  錯誤: null,
  查詢結果: []
};

export default (state = 初始狀態, action) => {
  if (action.type === ACTION_TSHA) {
    switch (action.狀態){
      case 'KHAI_SI':
        return {
          ...state, 正在查: true
        };
      case 'SING_KONG':
        return {
          ...state,
          正在查: false, 錯誤: null, 查詢結果: action.查詢結果
        };
      case 'SIT_PAI':
        return {
          ...state,
          正在查: false, 錯誤: action.錯誤
        };
      default:
        return state;
    }
  } else {
    return state;
  }
};
