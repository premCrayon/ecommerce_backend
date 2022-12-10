import express from "express";
import { getAllProducts ,getProduct} from "../../../controllers/product";



const router = express.Router();

router.post("/list", async (req, res, next) => {
    try {
        let data = await getAllProducts(req.body);
        res.status(200).send({ type: "success", data });
    } catch (err) {
        console.log(err);
        next({
            code: 500,
            message: err,
        });
    }
});

router.post("/get_product", async (req, res, next) => {
    try {
        let data = await getProduct(req.body);
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
