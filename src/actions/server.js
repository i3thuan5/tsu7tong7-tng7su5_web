
export const 查ajax = (語句, 辭典) => {
  let data = {
    查詢腔口: '閩南語',
    查詢語句: 語句,
    使用者辭典: 辭典
  }
  return fetch("https://服務.意傳.台灣/標漢羅", {
    body: JSON.stringify(data), // must match 'Content-Type' header
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
/*    credentials: 'same-origin', // include, same-origin, *omit
     headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    }, */
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
})}

