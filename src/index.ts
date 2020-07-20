// import bodyParser from 'body-parser';
import { crawl } from './crawl';
import express from 'express';
import { extract } from './extract';

const app = express();
const port = 5000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.json());
// form 처리하는 것
app.use(express.urlencoded({ extended: false }));


app.get('/', (req: express.Request, res: express.Response) => {
  res.send("start");
});

// app.get('/crawl', async (
//   req: express.Request, 
//   res: express.Response
// ) => {
//   const result = await crawl();
//   res.send(extract(result).join(',<br/>'));
//   res.send(result);
// });

app.post('/crawl', async (  
  req: express.Request, 
  res: express.Response
) => {
  const { url } = req.body;
  
  if (url) {
    const result = await crawl(url);
    console.log(extract(result).join(',<br/>'));
    res.send(extract(result).join(',<br/>'));
  }
});

app.listen(port, (): void => {
  console.log(`${port}에서 서버 start`);
});

