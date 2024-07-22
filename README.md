"# nodejs-express-mysql-poc" 

### `Install Project Dependencies and Start Application`

    cmd:./> npm install
    cmd:./> npm start

### `Swagger UI`
    
    http://localhost:3000/api-docs

## Key Differences
```
Abstraction Level: Repositories generally offer a higher level of abstraction and can include business logic, whereas DAOs are more focused on low-level data access.

Domain vs. Data Access: Repositories are often used in the context of domain-driven design and work with domain entities. DAOs are more concerned with the data access layer and often interact more directly with the database.

Usage Context: Repositories are typically used in applications where domain logic and business rules are significant. DAOs are used where the focus is on managing data access and storage.

In summary, the Repository pattern provides a higher-level abstraction for managing data, often integrating more closely with domain logic, while the DAO pattern provides a lower-level abstraction focused specifically on data persistence and retrieval.
```

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
