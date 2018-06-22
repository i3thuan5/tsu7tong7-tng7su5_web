export const 查ajax = jest.fn((語句, 辭典) =>
  new Promise((resolve, reject) => {
    if (語句 == 'sui2') {
      resolve([])
    } else {
      reject('oh no')
    }
  })
);
