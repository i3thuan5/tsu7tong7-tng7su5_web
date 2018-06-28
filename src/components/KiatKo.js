import React from 'react'
import { Block } from 'demo-ui'
import HianSiKhohLiuA from '../containers/HianSiKhohLiuA'
import SinSit from './SinSit'
import Bun from './Bun'


const KiatKo = ({查詢結果, 錯誤訊息}) => {
  return (
  <Block>
    {
      查詢結果 ? <HianSiKhohLiuA/>
      : null
    }
    <SinSit 訊息={錯誤訊息}/>
    <Bun 查詢結果={查詢結果}/>
  </Block>
  )
}

export default KiatKo;
