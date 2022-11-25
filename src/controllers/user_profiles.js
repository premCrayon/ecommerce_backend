import Model from "../../models"


///get All user
export const getAllUsers = ({ offset = 0, limit = 10 }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await Model.UserProfiles
            .findAll({
                offset: offset,
                limit: limit,
                include:{
                    model: Model.RoleMaster,
                    required: false,
                    attributes:["name"]
                  }, 
            });
            resolve(data);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};


///get All user Detail
export const getById = ({ id = 0 }) => {

    return new Promise(async (resolve, reject) => {
        try {
            const data = await Model.UserProfiles.findByPk(id);
            resolve(data);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

///create User
export const CreateUser = ({ insert_field = {} }) => {

    return new Promise(async (resolve, reject) => {
        try {
            const data = await Model.UserProfiles.create({
                ...insert_field
            },
            
            );
            resolve(data);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};


//update User
export const UpdateUser = ({ update_field = {}, id }) => {

    return new Promise(async (resolve, reject) => {
        try {
            const data = await Model.UserProfiles.update(
                {
                    ...update_field
                },
                { where: { id: id } }
            );
            resolve(data);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
