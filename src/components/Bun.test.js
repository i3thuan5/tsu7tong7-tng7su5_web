import React from 'react';
import renderer from 'react-test-renderer';
import { HanLoTsua } from 'demo-ui';
import Bun from './Bun';



it('顯示空結果', () => {
  const tree = renderer
    .create(<Bun 查詢結果={[]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})


it('顯示一漢羅', () => {
  const tree = renderer
    .create(<Bun 查詢結果={[{漢字: '漢字', 臺羅斷詞: '臺羅斷詞', 白話字: '白話字'}]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
