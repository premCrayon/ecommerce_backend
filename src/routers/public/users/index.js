import express from "express";
import { CreateUser, getAllUsers, getById, UpdateUser } from "../../../controllers/users";



const router = express.Router();

router.post("/getAll", async (req, res, next) => {
    try {
        let data = await getAllUsers(req.body);
        res.status(200).send({ type: "success", data });
    } catch (err) {
        console.log(err);
        next({
            code: 500,
            message: err,
        });
    }
});

router.post("/getById", async (req, res, next) => {
    try {
        let data = await getById(req.body);
        res.status(200).send({ type: "success", data });
    } catch (err) {
        console.log(err);
        next({
            code: 500,
            message: err,
        });
    }
});

router.post("/create", async (req, res, next) => {
    try {
        let data = await CreateUser(req.body);
        res.status(200).send({ type: "success", data });
    } catch (err) {
        console.log(err);
        next({
            code: 500,
            message: err,
        });
    }
});

router.post("/update", async (req, res, next) => {
    try {
        let data = await UpdateUser(req.body);
        res.status(200).send({ type: "success", data });
    } catch (err) {
        console.log(err);
        next({
            code: 500,
            message: err,
        });
    }
});

module.exports = router;
