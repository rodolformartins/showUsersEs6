import express from 'express'
import { Person } from './person.js';

const teste = new Person('Rodolfo');

console.log(teste.sayMyName());


const app = express()
app.listen(3000, () => console.log('Server rodando na porta 3000'))