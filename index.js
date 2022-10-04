import dotenv from 'dotenv'
import { Connect } from './src/controller/connect.js';
import { Consultas } from './src/controller/express.js';


dotenv.config();
const conexao = new Connect();
const consulta = new Consultas();
conexao.connectToDataBase();
consulta.consultas();

