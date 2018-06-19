export const 查ajax = jest.fn((語句, 辭典) =>
  new Promise((resolve, reject) => {
    if (語句 == 'sui2') {
      resolve({
        綜合標音:[]
      })
    } else {
      reject('oh no')
    }
  })
);
