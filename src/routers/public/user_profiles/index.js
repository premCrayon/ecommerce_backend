import express from "express";
import { upsertUser, getAllUsers, getById,login } from "../../../controllers/user_profiles";



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

router.post("/upsert", async (req, res, next) => {
    try {
        let data = await upsertUser(req.body);
        res.status(200).send({ type: "success", data });
    } catch (err) {
        console.log(err);
        next({
            code: 500,
            message: err,
        });
    }
});

router.post("/login", async (req, res, next) => {
    try {
        let data = await login(req.body);
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
