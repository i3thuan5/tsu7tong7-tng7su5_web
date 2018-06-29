import React from 'react';
import { Block, HanLoTsua, HanLoSu } from 'demo-ui';


const Bun = ({查詢結果}) => (
  <Block>
    {
      查詢結果.map(一句 => (
        <div key={一句.漢字} className='app line'>
          <HanLoTsua 羅馬字={一句.臺羅斷詞} 漢字={一句.漢字} 是否合音={false}/>
          <div>
          {
            一句.白話字.split(' ').map(一詞 =>
              <HanLoSu key={一詞} 漢字={一詞} 羅馬字=''/>
            )
          }
          </div>
        </div>
      ))
    }
  </Block>
);

export default Bun;
