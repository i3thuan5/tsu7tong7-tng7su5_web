
export const 查ajax = (語句, 辭典) => (
  //fetch("https://意傳.台灣/")
   new Promise((resolve, reject) => {
     setTimeout(() => {
      resolve([{漢字:語句, 臺羅:'sui2'},])
//        reject('失敗')
     }, 2000)})
);
