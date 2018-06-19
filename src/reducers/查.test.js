import {TSHA} from '../actions';
import reducer from './查';

const 初始狀態 = {
  語句: null,
  正在查: false,
  錯誤: null,
  查詢結果: {}
};
/* {
  查: {
    語句: null,
    正在查: false,
    錯誤: null,
    查詢結果: {}
  },
  辭典: {
    型: null,
    音: null,
    辭典表: []
  }
};
 */
it('初始狀態', () => {
  expect(reducer(undefined, {})).toEqual(初始狀態);
});


it('開始查', () => {
  expect(reducer(undefined, {
    type: TSHA,
    狀態: 'KHAI_SI',
  })).toEqual({
    ...初始狀態, 正在查: true
  });
});


it('查成功', () => {
  expect(reducer(undefined, {
    type: TSHA,
    狀態: 'SING_KONG',
    查詢結果: {綜合標音: []}
  })).toEqual({
    ...初始狀態,
    正在查: false, 錯誤: null, 查詢結果: {綜合標音: []}
  });
});


it('查失敗', () => {
  expect(reducer(undefined, {
    type: TSHA,
    狀態: 'SIT_PAI',
    錯誤: 'Oh no!'
  })).toEqual({
    ...初始狀態,
    正在查: false, 錯誤: 'Oh no!', 查詢結果: {}
  });
});
