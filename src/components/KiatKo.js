import React from 'react';
import {Block, HanLoTsua} from 'demo-ui';

const KiatKo = ({查詢結果}) => (
  <Block>
    {
      查詢結果.map(一句 => (
        <HanLoTsua key={一句.漢字} 羅馬字={一句.臺羅} 漢字={一句.漢字} 是否合音={false}/>
      ))
    }
  </Block>
);

export default KiatKo;
