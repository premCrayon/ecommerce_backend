import Model from "../../models";


//cancel orders
export const cancelledOrder = ({ order_id ,product_id,user_profile_id }) => {
    return new Promise(async (resolve, reject) => {
        try {


            await Model.CancelledOrders.insert({
                cancelled_by:user_profile_id,
                order_id,
                product_id
            });

            await Model.OrderItems.update({is_active:false},{ where: { id: order_id } });


            resolve({ msg: `Order Cancelled Successfully` });

        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

