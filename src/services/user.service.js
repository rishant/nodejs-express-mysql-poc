const UserRepository = require('../repositories/user.repository');
const UserDTO = require('../dto/user.dto');
const ResponseDTO = require('../dto/response.dto');

class UserService {
    async createUser(userDto) {
        try {
            const userId = await UserRepository.createUser(userDto);
            return new ResponseDTO('success', 'User created successfully', { userId });
        } catch (error) {
            return new ResponseDTO('error', error.message, null);
        }
    }

    async getUserById(id) {
        try {
            const user = await UserRepository.getUserById(id);
            return new ResponseDTO('success', 'User retrieved successfully', user);
        } catch (error) {
            return new ResponseDTO('error', error.message, null);
        }
    }

    // Add other methods...
}

module.exports = new UserService();
