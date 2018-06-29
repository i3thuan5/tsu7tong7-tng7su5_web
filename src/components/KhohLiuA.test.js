import React from 'react';
import renderer from 'react-test-renderer'
import { CopyButton } from 'demo-ui'
import KiatKo from './KiatKo';
import KhohLiuA from './KhohLiuA'


it('空結果無複製鈕仔', () => {
  const tree = renderer
    .create(<KhohLiuA 漢字='' 台羅='' POJ=''/>)
    .toJSON()
  expect(tree).toMatchSnapshot();
});
