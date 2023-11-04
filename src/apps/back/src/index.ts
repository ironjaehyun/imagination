import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = 3000;

const app = express();
app.use(cors('*'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(`REQ [ / ]:: ${JSON.stringify(req.query)}`);
  res.send(`Hello World`);
});

app.listen(PORT, () => {
  console.log(`Server running... ${PORT}`);
});

app.post('/join/checkId', (req, res) => {
  console.log(req.body.id);
  console.log(res.error);
});