import express from 'express'
import { Person } from './person.js';
import './modules/path.js'


const app = express()
app.listen(3000, () => console.log('Server rodando na porta 3000'))