const mysql = require('mysql2');
require('dotenv').config();
const appConfig = require('../config/app.config');

class MysqlDBConnectionPool {

    constructor() {
        this.pool = mysql.createPool({
            host: process.env.DB_HOST || appConfig.DB_HOST,
            port: process.env.DB_PORT || appConfig.DB_PORT,
            user: process.env.DB_USER || appConfig.DB_USER,
            password: process.env.DB_PASSWORD || appConfig.DB_PASSWORD,
            database: process.env.DB_DATABASE || appConfig.DB_DATABASE,
            // connectionLimit: process.env.DB_CONNECTION_LIMIT || appConfig.DB_CONNECTION_LIMIT
        }).promise(); // Use the promise wrapper to use async/await
    }

    async getConnection() {
        try {
            const connection = await this.pool.getConnection();
            return connection;
        } catch (err) {
            throw err;
        }
    }

    releaseConnection(connection) {
        connection.release();
    }

    endPool() {
        this.pool.end((err) => {
            if (err) throw err;
        });
    }
}

module.exports = new MysqlDBConnectionPool();
