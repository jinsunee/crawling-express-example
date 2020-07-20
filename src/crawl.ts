import axios, {AxiosResponse} from 'axios';

import { Send } from 'express';

export const crawl = (url: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    axios.get(url)
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