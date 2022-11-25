## Create app.js file inside project folder

## Run following commands for install express & nodemon
    npm install express
    npm install nodemon

## Add these two commands which are important for running and dynamically running the code after changes made in your Node.js app respectively in package.json file.
    "start": "node app.js",
    "dev": "nodemon app.js"

## Configuration of package.json File:
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.12"
  }
}

## Install dotenv to access env file
    npm i dotenv
    
## Create migration file without model (for alter table)
npx sequelize-cli migration:generate --name migration-skeleton
## Create migration file with model (for create table with model)
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
## create config json file
npx sequelize init
## migrate to db
npx sequelize-cli db:migrate
## undo last migration
npx sequelize-cli db:migrate:undo
## create migration file
npx sequelize-cli seed:generate --name demo-user
## running seeder
npx sequelize-cli db:seed:all
## undo seeds
npx sequelize-cli db:seed:undo