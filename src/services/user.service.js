const UserRepository = require('../repositories/user.repository');
const UserDTO = require('../dto/user.dto');
const ResponseDTO = require('../dto/response.dto');

class UserService {
    
    async createUser(userDto) {
        return await UserRepository.createUser(userDto);
    }

    async getUserById(id) {
        return await UserRepository.getUserById(id);
    }

    // Add other methods...
}

module.exports = new UserService();