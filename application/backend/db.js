const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL);

async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Соединение с БД было успешно установлено');
    } catch (e) {
        console.error('Невозможно выполнить подключение к БД: ', e);
        process.exit(1);  // Завершаем процесс в случае ошибки
    }
}

module.exports = { sequelize, connectToDatabase };

