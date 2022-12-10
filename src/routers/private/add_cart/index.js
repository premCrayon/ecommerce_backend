import express from "express";
import { upsertCart,getAllCarts,statusChange } from "../../../controllers/add_cart";
import {cartUpdate} from "./add_cart";


const router = express.Router();

router.post("/upsert", async (req, res, next) => {
    try {
        let data = await cartUpdate(req.body);
        res.status(200).send({ type: "success", data });
    } catch (err) {
        console.log(err);
        next({
            code: 500,
            message: err,
        });
    }
});


router.post("/get_add_to_carts", async (req, res, next) => {
    try {
        let data = await getAllCarts(req.body);
        res.status(200).send({ type: "success", data });
    } catch (err) {
        console.log(err);
        next({
            code: 500,
            message: err,
        });
    }
});

router.post("/status_change", async (req, res, next) => {
    try {
        let data = await statusChange(req.body);
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
