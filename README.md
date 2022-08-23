
# Photo Caption Contest API

This API allow users to receive, create, update and delete photos as well as captions for them. This project is one of the portfolio projects in Codecademy's Backend Engineer Path. Different kind of technologies were used in this project for ORM, Caching and Authentication/Authorization etc.


## Tools and Technologies used for this project

- Node.js
- Express
- Postgresql
- Sequelize
- NodeCache
- Passport.js / Bcrypt.js
- JWT

  
## API Usage

To be able to run this API on your machine, you need to have Node.js, NPM and Postgresql installed. First clone this repo by running the command below on your terminal.

```bash
  git clone https://github.com/bugrakocabay/photo-caption-contest-api.git
```

cd into the repo folder

```bash
  cd photo-caption-contest-api
```

Install dependencies

```bash
  npm install
```
Before you start the server, you need to create a .env file, where environment variables will be stored. You are going to need two things in it. First is `PORT`(this is optional), next one is `SECRET` key for JWT. You can set it up anything you want.


Then start server

```bash
  npm start
```


## Outcomes

This project is where I used some of the technologies and tools that I mentioned above for the first time. For example, Sequelize helped me realize how ORM lets developer manage complex stuff with very little effort, and put that time saved into more creative things.
Next is, how caching works and provides such fast data transfer between server and client. The first picture shows before caching added to `GET` method for`/photos/{id}`, and the second is after.

![photo](https://github.com/bugrakocabay/photo-caption-contest-api/blob/main/public/images/cache-before.png?raw=true)
![photo2](https://github.com/bugrakocabay/photo-caption-contest-api/blob/main/public/images/cache-after.png?raw=true)
# Endpoints
#### Register

```http
  GET /register
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**  |
| `password`      | `string` | **Required**  |

```http
  GET /login
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**  |
| `password`      | `string` | **Required**  |

```http
  GET /photos
```

**No parameter/body required**


```http
  POST /photos
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**  |
| `url`      | `string` | **Required**  |

```http
  GET/DELETE /photos/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**  |

```http
  PUT /photos/{id}
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**  |
| `url`      | `string` | **Required**  |

```http
  POST /captions
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `PhotoId`      | `string` | **Required**  |
| `comment`      | `string` | **Required**  |

```http
  GET/DELETE /captions/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**  |

```http
  PUT /captions/{id}
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `comment`      | `string` | **Required**  |

## Contact Info
- LinkedIn: [My LinkedIn Account](https://www.linkedin.com/in/bu%C4%9Fra-kocabay-91062a193/)
- Mail: kocabaybugra@gmail.com
- Medium: [My Medium Account](https://medium.com/@kocabaybugra/what-is-orm-implementing-orm-with-sequelize-using-node-js-and-postgres-e4a0a65bb6e)

