import {查ajax} from './server';

export const TSHA = 'TSHA';

const 開始查 = 語句 => {
  return ({
    type: TSHA,
    狀態: 'KHAI_SI',
  });
};

const 查成功 = 查詢結果 => ({
    type: TSHA,
    狀態: 'SING_KONG',
    查詢結果
});


const 查失敗 = 錯誤 => ({
    type: TSHA,
    狀態: 'SIT_PAI',
    錯誤
});


export const 查 = 語句 => {
  return (dispatch, getState) => {

    dispatch(開始查(語句));

    let {辭典表} = getState();
    return 查ajax(語句, 辭典表)
      .then(
        data => dispatch(查成功(data)),
        err => dispatch(查失敗(err))
      );
  };
}
