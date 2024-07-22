const MysqlDBConnectionPool = require('../utils/db.connection');

class UserDAO {
    async createUser(user) {
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        try {
            const connection = await MysqlDBConnectionPool.getConnection();
            const [result] = await connection.query(query, [user.username, user.email, user.password]);
            MysqlDBConnectionPool.releaseConnection(connection);
            return result.insertId;
        } catch (err) {
            throw err;
        }
    }

    async getUserById(id) {
        const query = 'SELECT * FROM users WHERE id = ?';
        try {
            const connection = await MysqlDBConnectionPool.getConnection();
            const [result] = await connection.query(query, [id]);
            MysqlDBConnectionPool.releaseConnection(connection);
            return result[0];
        } catch (err) {
            throw err;
        }
    }

    // Add other CRUD methods...
}

module.exports = new UserDAO();
