import Model  from "../../models";

//create product
export const createdOrder = ({ create_fields = {}, user_profile_id }) => {
    return new Promise(async (resolve, reject) => {
        try {

            const { products, ...rest } = create_fields;

            const params = {
                ...rest,
                created_by: user_profile_id,
                createdAt: new Date(),
                updatedAt: new Date(),
                booked_by: user_profile_id
            }



            const list = await Model.Products.findAll({
                where: { id: products?.map(i => i?.id) }
            });

            const product_stock_update_params = list?.map((item) => {

                const minused_count = products?.find(i => i?.id === item?.id)

                return {
                    unique_no: item?.unique_no,
                    stock: item?.stock - minused_count?.count,
                    name: item?.name,
                    cost: item?.cost,
                    discount_percentage: item?.discount_percentage

                }
            })

            await Model.Products.bulkCreate(product_stock_update_params,
                {
                    updateOnDuplicate: ["stock"],
                })


            const data = await Model.OrderItems.create(params);

            const ordered_product_params = products?.map((val) => {
                return {
                    created_by: user_profile_id,
                    order_id: data?.id,
                    product_id: val?.id,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            })

            await Model.OrderItemProduct.bulkCreate(ordered_product_params);

            await Model.DeliveryLog.create({
                order_id: data?.id,
                description: "Order Placed Successfully",
                created_by: user_profile_id,
                createdAt: new Date(),
                updatedAt: new Date()
            })

            resolve({ msg: `Order Succeessfully Added` });

        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

//list al order
export const getAllOrders = ({ offset = 0, user_profile_id, limit = 10 }) => {
    return new Promise(async (resolve, reject) => {
        try {

            const lists = await Model.OrderItems.findAll({
                offset: offset,
                limit: limit,
                where: {
                    created_by: user_profile_id,
                    is_active: true,
                    is_delete: false
                },
                include: [
                    {
                        model: Model.PaymentStatus,
                        required: false,
                        attributes: ["id", "name"]
                    },
                    {
                        model: Model.PaymentMethods,
                        required: false,
                        attributes: ["id", "method"]
                    },
                    {
                        model: Model.DeliveryStatus,
                        required: false,
                        attributes: ["id", "name"]
                    }
                    
                ],
                attributes: [
                    "id",
                    "createdAt"
                ]
            })


            let data=[];

            for (const list of lists) {
                
                let {count} = await Model.OrderItemProduct.findAndCountAll({
                    where:{
                        order_id:list?.id
                    },
                    attributes: [
                        "id",
                        "createdAt"
                    ]
                })

                data.push({
                    order_id:list?.id,
                    created_at:list?.createdAt,
                    payment_status:list?.PaymentStatus,
                    payment_methods:list?.PaymentMethod,
                    delivery_status:list?.DeliveryStatus,
                    count:count
                })
            }

            resolve(data);

        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

//get order details
export const getOrderDetails = ({ order_id }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const list = await Model.OrderItemProduct.findAll({
                where: {
                    order_id: order_id,
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
