import React from 'react';
import { Block, HanLoTsua, HanLoSu } from 'demo-ui';
import SinSit from './SinSit';

const KiatKo = ({查詢結果, 錯誤訊息}) => (
  <Block>
    <SinSit 訊息={錯誤訊息}/>
    {
      查詢結果.map(一句 => (
        <Block key={一句.漢字}>
          <HanLoTsua 羅馬字={一句.臺羅斷詞} 漢字={一句.漢字} 是否合音={false}/>
          <div>
          {
            一句.白話字.split(' ').map(一詞 =>
              <HanLoSu key={一詞} 漢字={一詞} 羅馬字=''/>
            )
          }
          </div>
        </Block>
      ))
    }
  </Block>
);

export default KiatKo;
