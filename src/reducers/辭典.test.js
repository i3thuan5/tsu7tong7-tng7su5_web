import reducer from './辭典';


it('初始辭典表狀態', () => {
  expect(
    reducer(undefined, {})
  ).toEqual([]);
})
