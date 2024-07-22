const User = require('../entities/user');
const UserDto = require('../dto/user.dto');

class UserMapper {
  static toDto(user) {
    return new UserDto(
      user.id,
      user.username,
      user.email,
      user.password,
      user.createdAt,
      user.updatedAt
    );
  }

  static toEntity(userDto) {
    return new User(
      userDto.id,
      userDto.username,
      userDto.email,
      userDto.password, // Note: password might be omitted in DTO
      userDto.createdAt,
      userDto.updatedAt
    );
  }
}

module.exports = UserMapper;
