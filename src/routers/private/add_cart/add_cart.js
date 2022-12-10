import { upsertCart,productAlreadyExist } from "../../../controllers/add_cart";

export const cartUpdate = ({ upsert_fields, user_profile_id }) => {
    return new Promise(async (resolve, reject) => {
        try {
             
            const  data = await productAlreadyExist({user_profile_id, product_id:upsert_fields?.product_id});
            
            if(data?.id){
                upsert_fields.id = data?.id;
            }

            await upsertCart({user_profile_id,upsert_fields})


            resolve(`Cart Updated`)

        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
