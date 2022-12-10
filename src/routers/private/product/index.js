import express from "express";
import { upsertProduct } from "../../../controllers/product";



const router = express.Router();

router.post("/upsert", async (req, res, next) => {
    try {
        let data = await upsertProduct(req.body);
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
