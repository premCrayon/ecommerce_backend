import Model from "../../models";

//if product already exist
export const productAlreadyExist = ({ product_id, user_profile_id }) => {
    return new Promise(async (resolve, reject) => {
        try {

            const data = await Model.AddToCarts.findOne({
                where: {
                    created_by: user_profile_id,
                    is_active: true,
                    is_delete: false,
                    product_id:product_id
                },
                attributes: ["id", "product_id", "is_active", "is_delete"],
            });
            resolve(data);

        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

//upsert product
export const upsertCart = ({ upsert_fields = {}, user_profile_id }) => {
    return new Promise(async (resolve, reject) => {
        try {


            if (upsert_fields?.id && upsert_fields?.quantity === 0) {
                await Model.AddToCarts.destroy({
                    where: {
                        id: upsert_fields?.id
                    }
                });
            } else {
                const params = {
                    ...upsert_fields,
                    updated_by: upsert_fields?.id ? user_profile_id : null,
                    created_by: user_profile_id
                }
                await Model.AddToCarts.upsert(params);
            }


            resolve(`Cart ${upsert_fields?.id ? `Updated` : `Created`} Successfully`);

        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

//get all add to carts against user
export const getAllCarts = ({ user_profile_id, offset = 0, limit = 10 }) => {
    return new Promise(async (resolve, reject) => {
        try {

            const list = await Model.AddToCarts.findAll({
                offset: offset,
                limit: limit,
                where: {
                    created_by: user_profile_id,
                    is_active: true,
                    is_delete: false
                },
                include: [
                    {
                        model: Model.Products,
                        required: false,
                        attributes: ["id", "name", "stock", "serial_no", "details", "cost", "discount_percentage", "product_weight", "stock", "createdAt", "category_id", "is_active", "is_delete"],
                        where: {
                            is_active: true,
                            is_delete: false
                        },
                        include:[
                            {
                                model: Model.ProductAssets,
                                required:false,
                                attributes:['url'],
                                where: {
                                    is_active: true,
                                    is_delete: false
                                },
                                limit:1
                            }
                        ]
                    },
                ],
                attributes: ["id", "quantity", "product_id", "is_active", "is_delete","createdAt"],
                order: [
                    ['createdAt', 'DESC']
                ],
            });
            resolve(list);

        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

//delete and status change 
export const statusChange = ({ update_field = {}, id, user_profile_id }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const params = {
                ...update_field,
                updated_by: upsert_fields?.id ? user_profile_id : null,
                create_by: user_profile_id
            }
            await Model.AddToCarts.update(params, { where: { id: id } });
            resolve(`Product Update Successfully`);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};