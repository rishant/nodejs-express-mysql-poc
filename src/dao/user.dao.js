const MysqlDBConnectionPool = require('../utils/db.connection');

class UserDAO {

    async createUser(user) {
        const connection = await MysqlDBConnectionPool.getConnection();
        try {
          const [result] = await connection.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
            [user.username, user.email, user.password]);
          return result.insertId;
        } catch (err) {
            throw err;
        } finally {
            MysqlDBConnectionPool.releaseConnection(connection);
        }
    }
  
    async getUserById(id) {
        const connection = await MysqlDBConnectionPool.getConnection();
        try {
          const [rows] = await connection.query('SELECT * FROM users WHERE id = ?', [id]);
          return rows[0];
        } catch (err) {
            throw err;
        } finally {
            MysqlDBConnectionPool.releaseConnection(connection);
        }
    }
  
    // Add other CRUD methods...
}
  
module.exports = new UserDAO();
