import express from 'express'
import { UserModel } from '../src/models/user.model.js'

const userModel = new UserModel();

const userMethod = userModel.modelReturn();

const app = express();

app.use(express.json());


//Consultando todos os usuários na base de dados
app.get('/users', async (req, res) => {
    try {
        const users = await userMethod.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


//consultando usuário por ID
app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userMethod.findById(id);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message)
    }
});



app.post('/users', async (req, res) => {
    try {
        const user = await userMethod.create(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// Atualizar um campo especifico de algum usuário
app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userMethod.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message)
    }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com expressa na porta ${port}!`));