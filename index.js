import { Person } from './person.js';
// import './modules/path.js'
// import './modules/fs.js'
// import './modules/http.js'

import dotenv from 'dotenv'
import { Connect } from './src/database/connect.js';

dotenv.config();
const conexao = new Connect();
conexao.connectToDataBase();
import express from 'express'
import './modules/express.js'

// const app = express()
// app.listen(3000, () => console.log('Server rodando na porta 3000'))