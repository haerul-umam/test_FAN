# API epresence

## Enpoint

- login = req body {email:'',password:''} POST http://127.0.0.1:4000/api/v1/login
- checkin/out = req body {type:'IN'/'OUT',time:'yyyy-mm-dd hh:mm:ss'} POST http://127.0.0.1:4000/api/v1/presence
- approval = POST http://127.0.0.1:4000/api/v1/approval/:id 'id' from table epresences
- get data = GET http://127.0.0.1:4000/api/v1/presence

## Installation

requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd ./api
npm i
```

Setup database

```sh
set database name, username and password in ./api/config/config.json and ./api/database/config.js
```

Prepare database
```
migration:
$ npx sequelize-cli db:migrate

seed demo user:
$ npx sequelize-cli db:seed:all
data user included in ./api/seeders/*-demo-user.js
```
Run server
```
$ npm start
```
