jest.mock('./server');

import configMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {查} from './index';
import {查ajax} from './server';

const middlewares = [thunk];
const mockStore = configMockStore(middlewares);


it('要傳 語句 辭典', () => {
  let 語句 = 'sui2';

  //查(語句, 辭典);
  //expect(查ajax).toBeCalledWith(語句, 辭典);

  let fakeStore = mockStore({
    查: {查詢結果: []},
    辭典: {辭典表: []}
  });
  return fakeStore
    .dispatch(查(語句))
    .then(() => {
      expect(查ajax).toBeCalledWith(語句, []);
  });
});


it('收到查詢結果', async () => {
  let 語句 = 'sui2';
  let 辭典 = [];
  let fakeStore = mockStore({查: {查詢結果: []}});

  //await expect(查(語句, 辭典)).resolves.toEqual({綜合標音:[]});

  return fakeStore
    .dispatch(查(語句, 辭典))
    .then(() => {
      expect(store.getActions()).toEqual([
        {type: TSHA, 狀態: 'KHAI_SI'},
        {type: TSHA, 狀態: 'SING_KONG', 查詢結果}
    ]);
  });
});
