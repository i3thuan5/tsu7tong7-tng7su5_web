import reducer from './辭典';
import {
  KE_SUTIAN,
  THAI_SUTIAN,
  TSHING_SUTIAN
} from '../actions/辭典';


it('初始辭典表狀態', () => {
  expect(
    reducer(undefined, {})
  ).toEqual({辭典表:[], 錯誤訊息:null});
})


it('加一詞', () => {
  expect(
    reducer(
      undefined, {
      type: KE_SUTIAN,
      漢字: 'A',
      羅馬字: 'a'
    })
  ).toEqual({辭典表:[['A', 'a']], 錯誤訊息:null});
})


it('加第二e詞', () => {
  expect(
    reducer(
      [['A', 'a']], {
      type: KE_SUTIAN,
      漢字: 'B',
      羅馬字: 'b'
    })
  ).toEqual({辭典表:[['A', 'a'], ['B', 'b']], 錯誤訊息:null});
})


it('加一詞只有漢字', () => {
  expect(
    reducer(
      undefined, {
      type: KE_SUTIAN,
      漢字: 'A',
      羅馬字: null
    })
  ).toEqual({辭典表:[['A']], 錯誤訊息:null});
})


it('原本失敗，這馬成功加一詞', () => {
  expect(
    reducer(
      undefined, {
      type: KE_SUTIAN,
      漢字: 'A',
      羅馬字: null
    })
  ).toEqual({辭典表:[['A']], 錯誤訊息:null});
})


it('移除該筆辭典', () => {
  expect(
    reducer(
      [['A', 'a'], ['B', 'b']], {
      type: THAI_SUTIAN,
      id: 0
    })
  ).toEqual({辭典表:[['B', 'b']], 錯誤訊息:null});
})


it('清除辭典', () => {
  expect(
    reducer(
      [['A', 'a']], {
      type: TSHING_SUTIAN
    })
  ).toEqual({辭典表:[], 錯誤訊息:null});
})
