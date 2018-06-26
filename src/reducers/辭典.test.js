import reducer from './辭典';
import {
  KE_SUTIAN,
  THAI_SUTIAN,
  TSHING_SUTIAN,
  ERROR_SUTIAN
} from '../actions/辭典';


it('初始辭典表狀態', () => {
  expect(
    reducer(undefined, {})
  ).toEqual({
    辭典表:[], 錯誤訊息:null
  });
})


it('加一詞', () => {
  expect(
    reducer(
      undefined, {
      type: KE_SUTIAN,
      新詞: ['A', 'a']
    })
  ).toEqual({
    辭典表:[['A', 'a']], 錯誤訊息: null
  });
})


it('加一詞只有漢字', () => {
  expect(
    reducer(
      undefined, {
      type: KE_SUTIAN,
      新詞: ['A']
    })
  ).toEqual({辭典表:[['A']], 錯誤訊息: null});
})


it('發出錯誤時只更動錯誤訊息', () => {
  expect(
    reducer(
      {
        辭典表:[['A']], 錯誤訊息: null
      }, {
      type: ERROR_SUTIAN,
      錯誤訊息: '重複了'
    })
  ).toEqual({
    辭典表:[['A']],
    錯誤訊息:'重複了'
  });
})


it('加一詞清掉進前失敗', () => {
  expect(
    reducer(
      {
        辭典表:[['A']], 錯誤訊息: '重複了'
      }, {
      type: KE_SUTIAN,
      新詞: ['B']
    })
  ).toEqual(expect.objectContaining({錯誤訊息:null}));
})


it('移除該筆辭典', () => {
  expect(
    reducer(
      {
        辭典表:[['A', 'a'], ['B', 'b']], 錯誤訊息: null
      }, {
      type: THAI_SUTIAN,
      id: 0
    })
  ).toEqual({辭典表:[['B', 'b']], 錯誤訊息:null});
})


it('清除辭典', () => {
  expect(
    reducer(
      {
        辭典表:[['A', 'a'], ['B', 'b']], 錯誤訊息: null
      }, {
      type: TSHING_SUTIAN
    })
  ).toEqual({辭典表:[], 錯誤訊息:null});
})
