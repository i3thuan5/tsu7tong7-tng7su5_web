jest.mock('./server');

import configMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {查} from './index';
import {查ajax} from './server';

const middlewares = [thunk];
const mockStore = configMockStore(middlewares);


it('要傳 語句 辭典', async () => {
  let 語句 = 'sui2';
  let fakeStore = mockStore({
    查: {查詢結果: []},
    辭典: {辭典表: []}
  });

  await fakeStore
    .dispatch(查(語句))
    .then(() => {
      expect(查ajax).toBeCalledWith(語句, []);
  });
});


it('收到查詢結果', async () => {
  let 語句 = 'sui2';
  let 辭典 = [];
  let fakeStore = mockStore({
    查: {查詢結果: []},
    辭典: {辭典表: []}
  });

  await fakeStore
  .dispatch(查(語句, 辭典))
  .then(() => {
    const actions = fakeStore.getActions();
    expect(actions).toContainEqual({type: 'TSHA', 狀態: 'KHAI_SI'});
    expect(actions).toContainEqual({type: 'TSHA', 狀態: 'SING_KONG', 查詢結果:{綜合標音:[]}});
  });
});


it('收到錯誤訊息', async () => {
  let 語句 = 'bai2';
  let 辭典 = [];
  let fakeStore = mockStore({
    查: {查詢結果: []},
    辭典: {辭典表: []}
  });

  await fakeStore
  .dispatch(查(語句, 辭典))
  .then(() => {
    const actions = fakeStore.getActions();
    expect(actions).toContainEqual({type: 'TSHA', 狀態: 'KHAI_SI'});
    expect(actions).toContainEqual({type: 'TSHA', 狀態: 'SIT_PAI', 錯誤訊息: 'oh no'});
  });
});
