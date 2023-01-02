import Model from "../../models";


//upsert add_to_favouite
export const upsertAddToFavourite = ({ product_id, id, bool, user_profile_id }) => {
    return new Promise(async (resolve, reject) => {
        try {
            let products=[];


            if (bool) {
                products = await Model.FavouriteProduct.findAll({
                    where: {
                        tagged_by: user_profile_id,
                        is_active: true,
                        is_delete: false,
                        product_id: product_id
                    },
                    attributes: ["id"],
                });
            }

            if (products?.length === 0) {

                const params = {
                    tagged_by: user_profile_id,
                    created_by: user_profile_id,
                    is_active: bool,
                    product_id,
                    id
                }

                await Model.FavouriteProduct.upsert(params);
                resolve(`Product Favourite ${id ? `Updated` : `Created`} Successfully`);
            } else {
                return resolve(`Product Already Favourite`)
            }


        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

//get favouite product
export const getFaouriteProduct = ({ user_profile_id }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const list = await Model.FavouriteProduct.findAll({
                where: {
                    tagged_by: user_profile_id,
                    is_active: true,
                    is_delete: false
                },
                include: [
                    {
                        model: Model.Products,
                        required: false,
                        attributes: ["id", "name", "details", "cost", "discount_percentage", "brand", "product_weight", "stock", "unique_no"],
                        include: [
                            {
                                model: Model.ProductAssets,
                                required: false,
                                attributes: ["url"],
                                where: {
                                    is_active: true
                                },
                                limit: 1
                            },
                        ]

                    }

                ],
                attributes: ["id"],
            });

            resolve(list);

        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};