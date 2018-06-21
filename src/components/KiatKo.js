import React from 'react';
import {Block} from 'demo-ui';

const KiatKo = ({查詢結果}) => (
  <Block>
    {
      查詢結果.map(一句 => (
        <div key={一句.漢字 + 一句.臺羅}>
        {
          一句.toString()
        }
        </div>
      ))
    }
  </Block>
);

export default KiatKo;
