import configureStore from 'redux-mock-store';
import { ACTION_SUTIAN, keSu, thaiSu, tshingSuTian } from './辭典';


it('加一筆辭典', () => {
  const fakeStore = configureStore()({});

  fakeStore.dispatch(keSu('漢字', '羅馬字'));

  expect(fakeStore.getActions()).toContainEqual({
    type: ACTION_SUTIAN,
    狀態: 'KE',
    漢字: '漢字',
    羅馬字: '羅馬字'
  })
});

it('移除該筆辭典', () => {
  const fakeStore = configureStore()({});

  fakeStore.dispatch(thaiSu(0));

  expect(fakeStore.getActions()).toContainEqual({
    type: ACTION_SUTIAN,
    狀態: 'THAI',
    id: 0
  });
});

it('清除辭典', () => {
  const fakeStore = configureStore()({});

  fakeStore.dispatch(tshingSuTian());

  expect(fakeStore.getActions()).toContainEqual({
    type: ACTION_SUTIAN,
    狀態: 'TSHING'
  });
});
