import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if (error) {
        return console.log("Erro: ", error)
    }

    console.log("Pasta criada com sucesso!");
})

// Criar um arquivo
fs.writeFileSync(path.join(__dirname, '/test', 'test.txt'), 'hello node!', (error) => {
    if (error) {
        return console.log('Erro:', error)
    }

    console.log("Arquivo criado com sucesso!");
},
    // Adicionar a um arquivo
    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), ' Hello World!', (error) => {
        if (error) {
            console.log(error)
        }
        console.log("Arquivo modificado com sucesso!");
    }),
    // Ler um arquivo

    fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
        if (error) {
            return console.log('Erro: ', error);
        }
        console.log(data);
    })
);







