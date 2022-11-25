import dotenv from "dotenv";
import express from "express";
import Sequelize from "sequelize";
import config from "./db/config";
import routers from "./src/routers";

const app = express();

dotenv.config();

const { username, database, dialect, host, password } = config.development;

const PORT = process.env.PORT || 8008;
app.set("port", PORT);
app.use(express.json());

app.get("/", async (req, res) => {
    const status = {
        message: "Server is running...",
    };
    res.status(200).send(status);
});

app.use("/api/v1", routers);

app.listen(PORT, async () => {
    try {
        console.log("Server is running at port : " + PORT);
        const sequelize = new Sequelize(database, username, password, {
            host: host,
            dialect: dialect,
            define:{
                timestamps: false,
                defaultScope: {
                    attributes: {
                      exclude: ['created_at', 'updated_at']
                    }
                  }
               }
        });
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
