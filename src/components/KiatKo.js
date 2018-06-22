import React from 'react';
import {Block, HanLoTsua} from 'demo-ui';
import SinSit from './SinSit';

const KiatKo = ({查詢結果, 錯誤訊息}) => (
  <Block>
    {
      錯誤訊息 ? <SinSit 訊息={錯誤訊息}/> : null
    }
    {
      查詢結果.map(一句 => (
        <HanLoTsua key={一句.漢字} 羅馬字={一句.臺羅} 漢字={一句.漢字} 是否合音={false}/>
      ))
    }
  </Block>
);

export default KiatKo;
