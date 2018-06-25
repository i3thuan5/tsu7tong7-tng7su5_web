import { isEqual } from 'lodash'


export const KE_SUTIAN = 'ke'
export const ERROR_SUTIAN = 'ERROR_SUTIAN'
export const THAI_SUTIAN = 'thai'
export const TSHING_SUTIAN = 'tshing'

export const keSuTian = (漢字, 羅馬字) => (dispatch, getState) => {
  let 新詞 = []
  if(漢字) 新詞.push(漢字)
  if(羅馬字) 新詞.push(羅馬字)

  const { 辭典表 } = getState().辭典
  console.log('辭典表=', 辭典表)
console.log(新詞)
  let 敢有 = 辭典表.find(function(element) {
    return isEqual(element, 新詞);
  })
console.log(敢有)
  if (敢有) {
    //莫加kang款的詞
    console.log('in')
    dispatch(顯示錯誤('已有該詞'))
    return
  }
  dispatch(keSu(新詞))
}

const 顯示錯誤 = 錯誤訊息 => ({
  type: ERROR_SUTIAN,
  錯誤訊息
})

const keSu = 新詞 => ({
  type: KE_SUTIAN,
  新詞
})

export const thaiSuTian = id => ({
  type: THAI_SUTIAN,
  id
})

export const tshingSuTian = () => ({
  type: TSHING_SUTIAN
})
