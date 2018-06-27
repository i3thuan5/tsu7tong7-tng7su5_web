import React from 'react';
import { Footer } from 'demo-ui';

const sites = [
  {
    title: "Github",
    url: "https://github.com/i3thuan5/tsu7tong7-tng7su5_web",
  },
  {
    title: "臺語羅馬字轉換器",
    url: "https://xn--m7rr8i4sil03a3tchtsc3hztv.xn--v0qr21b.xn--kpry57d/",
  },
  {
    title: "連字符書寫檢查器",
    url: "https://xn--p8s050ac6bg7zsxy.xn--v0qr21b.xn--kpry57d/",
  },
  {
    title: "詞彙分級網站",
    url: "https://xn--kbrr83a6ixbzl.xn--v0qr21b.xn--kpry57d/",
  },
  {
    title: "台中教育大學台語系",
    url: "http://taiwanese.ntcu.edu.tw/",
  },];

const IahKha = () =>
  <Footer sites={sites}/>;

export default IahKha;
