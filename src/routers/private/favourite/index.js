import express from "express";
import {upsertAddToFavourite,getFaouriteProduct} from "../../../controllers/add_to_favouite";

const router = express.Router();

router.post("/upsert", async (req, res, next) => {
    try {
        let data = await upsertAddToFavourite(req.body);
        res.status(200).send({ type: "success", data });
    } catch (err) {
        console.log(err);
        next({
            code: 500,
            message: err,
        });
    }
});

router.post("/", async (req, res, next) => {
    try {
        let data = await getFaouriteProduct(req.body);
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
