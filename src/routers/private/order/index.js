import express from "express";
import { createdOrder } from "../../../controllers/orders";

const router = express.Router();

router.post("/create", async (req, res, next) => {
    try {
        let data = await createdOrder(req.body);
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
