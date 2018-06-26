export const 查ajax = jest.fn((語句, 辭典) =>
  new Promise((resolve, reject) => {
    if (語句 == 'sui2') {
      resolve({
        json: () => ({分詞: []}),
        ok: true
      })
    } else if(語句 == '500'){
      resolve({
        ok: false,
        status: '500'
      })
    } else {
      reject('network error')
    }
  })
);
