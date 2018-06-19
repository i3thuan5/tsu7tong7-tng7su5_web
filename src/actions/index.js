import {dispatch} from 'redux';

const TSHA = 'TSHA';

export const 開始查 = 語句 => {
  return ({
    type: TSHA,
    狀態: 'KHAI_SI',
  });
};

export const 查成功 = 查詢結果 => ({
    type: TSHA,
    狀態: 'SING_KONG',
    查詢結果
});


export const 查失敗 = 錯誤訊息 => ({
    type: TSHA,
    狀態: 'SIT_PAI',
    錯誤訊息
});


export const 查 = 語句 => {
  return (dispatch) => {

    dispatch(開始查(語句));

    return 查ajax(語句)
      .then(
        data => dispatch(查成功(data.json())),
        err => dispatch(查失敗(err))
      );
  };
}
