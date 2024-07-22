const UserDAO = require('../dao/user.dao');
const UserMapper = require('../mappers/user.mapper');

class UserRepository {
    async createUser(userDto) {
        const user = UserMapper.toEntity(userDto);
        const userId = await UserDAO.createUser(user);
        return userId;
    }
  
    async getUserById(id) {
        const user = await UserDAO.getUserById(id);
        return UserMapper.toDto(user);
      }
  
    // Add other methods...
}
  
module.exports = new UserRepository();
