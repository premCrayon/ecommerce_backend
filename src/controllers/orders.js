import Model from "../../models";
import {Sequelize} from "sequelize";

//upsert product
export const createdOrder = ({ create_fields = {}, user_profile_id }) => {
    return new Promise(async (resolve, reject) => {
        try {

            const { products, ...rest } = create_fields;

            const params = {
                ...rest,
                created_by: user_profile_id,
                createdAt: new Date(),
                updatedAt: new Date(),
            }



            const list = await Model.Products.findAll({
                where: { id: products?.map(i => i?.id) }
            });

            const product_stock_update_params = list?.map((item) => {
                const minused_count = products?.find(i => i?.id === item?.id)
                return {
                    unique_no: item?.unique_no,
                    stock: item?.stock - minused_count?.count,

                }
            })

            console.log(product_stock_update_params)


            const updated = await Model.Products.bulkCreate(product_stock_update_params,
                {
                    updateOnDuplicate: ["unique_no"],
                })   


            // const data = await Model.OrderItems.create(params);

            // const ordered_product_params = products?.map((val) => {
            //     return {
            //         created_by: user_profile_id,
            //         order_id: data?.id,
            //         product_id: val,
            //         createdAt: new Date(),
            //         updatedAt: new Date(),
            //     }
            // })

            //  await Model.OrderItemProduct.bulkCreate(ordered_product_params);


            resolve(product_stock_update_params);

        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};