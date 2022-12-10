import Model from "../../models"

//upsert product
export const upsertProduct = ({ upsert_fields = {}, user_profile_id }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const params = {
                ...upsert_fields,
                updated_by: upsert_fields?.id ? user_profile_id : null,
                created_by: user_profile_id
            }

            const data = await Model.Products.upsert(params);

            if (upsert_fields?.asset?.length > 0) {

                const asset_parasms = upsert_fields?.asset?.map((val) => {
                    return {
                        id: val?.id ?? undefined,
                        product_id: data?.[0]?.id,
                        url: val?.url
                    }
                })

                await Model.ProductAssets.bulkCreate(asset_parasms, { updateOnDuplicate: ["id"] })
            }

            resolve(`Product Upset Successfully`);

        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

//get all product
export const getAllProducts = ({ offset = 0, limit = 10 }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await Model.Products
            .findAll({
                offset: offset,
                limit: limit,
                where:{
                    is_active:true,
                    is_delete:false
                },
                include:[
                     {
                        model: Model.UserProfiles,
                        required: false,
                        attributes:["first_name"],
                        where:{
                            is_active:true
                        }
                      },
                      {
                        model: Model.ProductAssets,
                        required: false,
                        attributes:["url"],
                        where:{
                            is_active:true
                        },
                        limit:1
                      },
                      {
                        model: Model.Category,
                        required: false,
                        attributes:["name"],
                        where:{
                            is_active:true
                        },
                      }
                ], 
                attributes: ["id","name","stock","serial_no","details","cost","discount_percentage","product_weight","stock","createdAt","category_id","is_active","is_delete"],
                order: [
                    ['createdAt', 'DESC']
                ],

               
            });
            resolve(data);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

//get by id
export const getProduct = ({ id }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await Model.Products
            .findByPk(id,{
                include:[
                     {
                        model: Model.UserProfiles,
                        required: false,
                        attributes:["first_name"],
                        where:{
                            is_active:true
                        }
                      },
                      {
                        model: Model.ProductAssets,
                        required: false,
                        attributes:["url"],
                        where:{
                            is_active:true
                        },
                        limit:1
                      },
                      {
                        model: Model.Category,
                        required: false,
                        attributes:["name"],
                        where:{
                            is_active:true
                        },
                      }
                ], 
                attributes: ["id","name","stock","serial_no","details","cost","discount_percentage","product_weight","stock","createdAt","category_id"],
            });
            resolve(data);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

//delete and status change 
export const statusChange = ({ update_field = {},id, user_profile_id }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const params = {
                ...update_field,
                updated_by: upsert_fields?.id ? user_profile_id : null,
                create_by: user_profile_id
            }
            await Model.Products.update(params,{ where: { id: id} });
            resolve(`Product Update Successfully`);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};