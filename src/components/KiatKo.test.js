import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import KiatKo from './KiatKo';
import { HanLoTsua } from 'demo-ui';

Enzyme.configure({adapter: new Adapter()});


it('顯示空結果', () => {
  const wrapper = shallow(<KiatKo 查詢結果={[]}/>);
  expect(wrapper.find(HanLoTsua).exists()).toBeFalsy();
});



it('顯示一結果', () => {
  const wrapper = shallow(<KiatKo 查詢結果={[{漢字: 'a', 臺羅斷詞: 'b'}]}/>);
  expect(wrapper.find(HanLoTsua).length).toEqual(1);
})
