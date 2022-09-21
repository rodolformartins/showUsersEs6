import express from 'express'

const app = express();


app.get('/home', (req, res) => {
    res.status(200).send('<h1>hello word!</h1>');
});

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'João Silva',
            email: 'joao@gmail.com'
        },
        {
            name: 'Jane Silva',
            email: 'jane@gmail.com'
        }
    ];

    res.status(200).json(users);
})

const port = 8080;

app.listen(port, () => console.log(`Rodando com expressa na porta ${port}!`));