const express = require('express');
const { connectToDatabase } = require('./db');

const PORT = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello!');
});

async function startServer() {
    await connectToDatabase();
    app.listen(PORT, () => console.log(`Сервер запущен на порту: ${PORT}`));
}

startServer();
