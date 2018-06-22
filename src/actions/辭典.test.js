import configureStore from 'redux-mock-store';
import {
  KE_SUTIAN,
  THAI_SUTIAN,
  TSHING_SUTIAN,
  keSuTian,
  thaiSuTian,
  tshingSuTian
} from './辭典';


it('加一筆辭典', () => {
  const fakeStore = configureStore()({});

  fakeStore.dispatch(keSuTian('漢字', '羅馬字'));

  expect(fakeStore.getActions()).toContainEqual({
    type: KE_SUTIAN,
    漢字: '漢字',
    羅馬字: '羅馬字'
  })
});

it('移除該筆辭典', () => {
  const fakeStore = configureStore()({});

  fakeStore.dispatch(thaiSuTian(0));

  expect(fakeStore.getActions()).toContainEqual({
    type: THAI_SUTIAN,
    id: 0
  });
});

it('清除辭典', () => {
  const fakeStore = configureStore()({});

  fakeStore.dispatch(tshingSuTian());

  expect(fakeStore.getActions()).toContainEqual({
    type: TSHING_SUTIAN
  });
});
