import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  KE_SUTIAN,
  ERROR_SUTIAN,
  THAI_SUTIAN,
  TSHING_SUTIAN,
  keSuTian,
  thaiSuTian,
  tshingSuTian
} from './辭典';

const mockStore = configureStore([thunk])

it('加一筆辭典', () => {
  const fakeStore = mockStore({
    辭典: {
      辭典表: []
  }});

  fakeStore.dispatch(keSuTian('漢字', '羅馬字'));

  expect(fakeStore.getActions()).toEqual([{
    type: KE_SUTIAN,
    新詞: ['漢字', '羅馬字']
  }])
});


it('不加重複的辭典', () => {
  const fakeStore = mockStore({
    辭典: {
      辭典表: [['A', 'a']]
  }});

  fakeStore.dispatch(keSuTian('A', 'a'));

  expect(fakeStore.getActions()).toEqual([{
    type: ERROR_SUTIAN,
    錯誤訊息: '已有該詞'
  }])
});


it('移除該筆辭典', () => {
  const fakeStore = mockStore({});

  fakeStore.dispatch(thaiSuTian(0));

  expect(fakeStore.getActions()).toEqual([{
    type: THAI_SUTIAN,
    id: 0
  }]);
});


it('清除辭典', () => {
  const fakeStore = mockStore({});

  fakeStore.dispatch(tshingSuTian());

  expect(fakeStore.getActions()).toEqual([{
    type: TSHING_SUTIAN
  }]);
});
