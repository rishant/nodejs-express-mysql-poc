const mysql = require('mysql2');
require('dotenv').config();
const appConfig = require('../config/app.config');

class MysqlDBConnectionPool {
    constructor() {
      if (!MysqlDBConnectionPool.instance) {
        this.pool = mysql.createPool({
            host: process.env.DB_HOST || appConfig.DB_HOST,
            port: process.env.DB_PORT || appConfig.DB_PORT,
            user: process.env.DB_USER || appConfig.DB_USER,
            password: process.env.DB_PASSWORD || appConfig.DB_PASSWORD,
            database: process.env.DB_DATABASE || appConfig.DB_DATABASE,
            connectionLimit: process.env.DB_CONNECTION_LIMIT || appConfig.DB_CONNECTION_LIMIT || 10
        });
        MysqlDBConnectionPool.instance = this;
      }
      return MysqlDBConnectionPool.instance;
    }
  
    getConnection() {
      return this.pool.promise().getConnection();
    }
  
    releaseConnection(connection) {
      connection.release();
    }
  
    end() {
      this.pool.end();
    }
  }
  
module.exports = new MysqlDBConnectionPool();
