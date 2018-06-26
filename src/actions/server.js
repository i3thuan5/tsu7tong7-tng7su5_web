import axios from 'axios'

export const 查ajax = (語句, 辭典) => axios.get(
  "https://服務.意傳.台灣/標漢羅", {
    params: {
    查詢腔口: '台語',
    查詢語句: 語句,
    使用者辭典: JSON.stringify(辭典)
  }})

