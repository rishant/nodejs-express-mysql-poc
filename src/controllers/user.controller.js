const UserService = require('../services/user.service');
const UserDTO = require('../dto/user.dto');

class UserController {
    async createUser(req, res) {
        const { username, email, password } = req.body;
        const userDto = new UserDTO(username, email, password);
        const response = await UserService.createUser(userDto);
        res.status(response.status === 'success' ? 201 : 400).json(response);
    }

    async getUserById(req, res) {
        const { id } = req.params;
        const response = await UserService.getUserById(id);
        res.status(response.status === 'success' ? 200 : 400).json(response);
    }

    // Add other methods...
}

module.exports = new UserController();
