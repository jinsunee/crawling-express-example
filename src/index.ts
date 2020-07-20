import { crawl } from './crawl';
import express from 'express';
import { extract } from './extract';

const app = express();
const port = 5000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send("start");
});

app.get('/crawl', async (
  req: express.Request, 
  res: express.Response
  ) => {
  const result = await crawl();
  res.send(extract(result).join(',<br/>'));
  // res.send(result);
});

app.listen(port, (): void => {
  console.log(`${port}에서 서버 start`);
});

