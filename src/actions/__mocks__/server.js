export const 查ajax = jest.fn((語句, 辭典) =>
  new Promise((resolve, reject) => {
    if (語句 == 'sui2') {
      resolve({data:{多元書寫: [{漢字:'sui2'}]}})
    } else if(語句 == '500'){
      reject('500')
    } else {
      reject('network error')
    }
  })
);
