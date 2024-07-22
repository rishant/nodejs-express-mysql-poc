"# nodejs-express-mysql-poc" 

### `Install Project Dependencies and Start Application`

    cmd:./> npm install
    cmd:./> npm start

### `Swagger UI`
    
    http://localhost:3000/api-docs


```
express-mysql-app/
├── src/
│   ├── config/
│   │   ├── app.config.js
│   │   └── swagger.config.js
│   ├── controllers/
│   │   └── user.controller.js
│   ├── dao/
│   │   └── user.dao.js
│   ├── dto/
│   │   ├── user.dto.js
│   │   └── response.dto.js
│   ├── entities/
│   │   └── user.js
│   ├── mappers/
│   │   └── user.mapper.js
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
├── init_db.sql
└── package.json

```
