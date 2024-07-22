const UserDAO = require('../dao/user.dao');

class UserRepository {
    async createUser(user) {
        return new Promise((resolve, reject) => {
            UserDAO.createUser(user, (err, userId) => {
                if (err) reject(err);
                resolve(userId);
            });
        });
    }

    async getUserById(id) {
        return new Promise((resolve, reject) => {
            UserDAO.getUserById(id, (err, user) => {
                if (err) reject(err);
                resolve(user);
            });
        });
    }

    // Add other methods...
}

module.exports = new UserRepository();
