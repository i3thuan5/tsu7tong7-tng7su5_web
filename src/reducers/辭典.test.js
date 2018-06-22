import reducer from './辭典';
import {
  KE_SUTIAN,
  THAI_SUTIAN,
  TSHING_SUTIAN
} from '../actions/辭典';


it('初始辭典表狀態', () => {
  expect(
    reducer(undefined, {})
  ).toEqual([]);
})

it('加一詞', () => {
  expect(
    reducer(
      undefined, {
      type: KE_SUTIAN,
      漢字: 'A',
      羅馬字: 'a'
    })
  ).toEqual([['A', 'a']]);
})


it('加一詞只有漢字', () => {
  expect(
    reducer(
      undefined, {
      type: KE_SUTIAN,
      漢字: 'A',
      羅馬字: null
    })
  ).toEqual([['A']]);
})

it('移除該筆辭典', () => {
  expect(
    reducer(
      [['A', 'a'], ['B', 'b']], {
      type: THAI_SUTIAN,
      id: 0
    })
  ).toEqual([['B', 'b']]);
})


it('清除辭典', () => {
  expect(
    reducer(
      [['A', 'a']], {
      type: TSHING_SUTIAN
    })
  ).toEqual([]);
})
