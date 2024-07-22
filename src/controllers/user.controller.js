const UserService = require('../services/user.service');
const UserDTO = require('../dto/user.dto');

class UserController {

    async createUser(req, res) {
        try {
            const { username, email, password } = req.body;
            const userDto = new UserDTO(null, username, email, password);
            const userId = await UserService.createUser(userDto);
          res.status(201).json({ id: userId });
        } catch (error) {
          res.status(500).send(error.message);
        }
    }

    async getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = await UserService.getUserById(id);
            user ? res.status(200).json(user) : res.status(404).send('User not found')
        } catch (error) {
          res.status(500).send(error.message);
        }
      }
    // Add other methods...
}

module.exports = new UserController();