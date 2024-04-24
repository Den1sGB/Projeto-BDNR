const express = require("express");
const app = express();
const mongoose = require('mongoose');
const userRoutes = require("../src/routes/userRoutes");

const PORT = 3000;

mongoose.connect('mongodb+srv://1234:1234@cluster.hrtozfj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster').then(() => {
    console.log("Conexão com o mongodb estabelecida com sucesso")
}).catch(error => {
    console.log("Erro ao conectar o mongodb", error);
});

app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor está conectado na porta  ${PORT}`);
});