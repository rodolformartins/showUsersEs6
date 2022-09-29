import mongoose from 'mongoose'

export class Connect {
    connectToDataBase = async () => {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@exibindouserses6.jnn3mvj.mongodb.net/?retryWrites=true&w=majority`,
            (error) => {
                if (error) {
                    return console.log('Ocorreu um erro ao se conectar com o banco de dados: ', error)
                }

                return console.log("Conexão com banco de dados realizada com sucesso!");
            })
    }
}



