import { 串語句 } from './HianSiKhohLiuA'


it('語句串', () => {
  let 查詢結果 = [{漢字: 'a', 臺羅斷詞: 'b', 白話字: 'c'}, {漢字: 'A', 臺羅斷詞: 'B', 白話字: 'C'}]
  expect(串語句(查詢結果)).toEqual({
    漢字: 'a A',
    台羅: 'b B',
    POJ: 'c C'
  })
})


it('空語句串', () => {
  let 查詢結果 = []
  expect(串語句(查詢結果)).toEqual({
    漢字: '',
    台羅: '',
    POJ: ''
  })
})
