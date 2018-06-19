export const 查ajax = jest.fn(
  (語句, 辭典) => {
    console.log('我是mock');
    return new Promise((resolve, reject) => {
      resolve({
        綜合標音:[{漢字:'媠', 臺羅:'sui2'}]
      })
    });
});
