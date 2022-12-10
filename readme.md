
### Run following commands for install express
`npm install express`
### Run following commands for install nodemon
`npm install nodemon`

### Add these two commands which are important for running and dynamically running the code after changes made in your Node.js app respectively in package.json file.
`"start": "node app.js",
"dev": "nodemon app.js"`

### Install dotenv to access env file
`npm i dotenv`

# DB Diagram
[DB diagram link](https://dbdiagram.io/d/637a2436c9abfc611173f2d4)
### Create migration file without model (for alter table)
npx sequelize-cli migration:generate --name migration-skeleton

### Create migration file with model (for create table with model)
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

### create config json file
npx sequelize init

### migrate to db
npx sequelize-cli db:migrate

### undo last migration
npx sequelize-cli db:migrate:undo

# Seeder 
### Creating the first Seed
npx sequelize-cli seed:generate --name demo-user

### Running Seeds
npx sequelize-cli db:seed:all

### Undoing Seeds
Seeders can be undone if they are using any storage. There are two commands available for that:

### If you wish to undo the most recent seed

npx sequelize-cli db:seed:undo

### If you wish to undo a specific seed:

npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

### If you wish to undo all seeds:

npx sequelize-cli db:seed:undo:all
