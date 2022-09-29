import dotenv from 'dotenv'
import { Connect } from './src/controller/connect.js';
import './src/controller/express.js'


dotenv.config();
const conexao = new Connect();
conexao.connectToDataBase();

