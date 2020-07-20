import axios, {AxiosResponse} from 'axios';

import { Send } from 'express';

export const crawl = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    axios.get('http://black-up.kr/product/detail.html?product_no=12786&cate_no=1&display_group=4')
      .then((res: AxiosResponse<any>) => {
        resolve(res.data);
        console.log(res);
      })
      .catch((error) => {
        reject(error);
        console.error(error);
      })
  })
}