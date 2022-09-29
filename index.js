import dotenv from 'dotenv'
import { Connect } from './src/database/connect.js';
import './modules/express.js'


dotenv.config();
const conexao = new Connect();
conexao.connectToDataBase();

