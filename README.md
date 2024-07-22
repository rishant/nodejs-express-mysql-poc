"# nodejs-express-mysql-poc" 

```
express-mysql-app/
├── src/
│   ├── config/
│   │   └── db.config.js
│   ├── controllers/
│   │   └── user.controller.js
│   ├── dao/
│   │   └── user.dao.js
│   ├── dto/
│   │   ├── user.dto.js
│   │   └── response.dto.js
│   ├── models/
│   │   └── user.model.js
│   ├── repositories/
│   │   └── user.repository.js
│   ├── routes/
│   │   └── user.routes.js
│   ├── services/
│   │   └── user.service.js
│   ├── utils/
│   │   └── db.connection.js
│   └── app.js
├── Dockerfile
├── docker-compose.yaml
└── package.json

```


```
express-mysql-app/
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── userModel.js
│   ├── services/
│   │   └── userService.js
│   ├── utils/
│   │   └── db.js
│   ├── app.js
│   └── routes.js
├── Dockerfile
├── docker-compose.yaml
├── package.json
└── .env

```