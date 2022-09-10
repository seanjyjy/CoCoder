import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8004;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // config cors so that front-end can use
// @ts-ignore
app.options('*', cors());

app.listen(port, () => console.log('question-service listening on port 8004'));
