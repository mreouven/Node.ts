import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
import { InitiateMongoServer } from './config/db';
import { CompanyRouter} from "./routes/company.route";
require('dotenv').config();

var upload = multer();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

app.use(upload.any());
app.use(express.static('public'));
InitiateMongoServer();



app.use('/compagny',new CompanyRouter().router)








app.all("*", (req, res) => {
    res.json(req.body)
  })

const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'localHost';

app.listen(PORT, () => {
    if (process.env.PORT)
      console.log(`Server is running in http://${URL}:${PORT} from env`)
    else
      console.log(`Server is running in http://${URL}:${PORT}`)
  })