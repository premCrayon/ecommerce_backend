import dotenv from "dotenv";

dotenv.config();

const config = {
    development: {
        username: process.env.DB_USER_NAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE_NAME,
        host: process.env.HOST_NAME,
        dialect: process.env.DIALECT_NAME,
    },
};

export default config;
