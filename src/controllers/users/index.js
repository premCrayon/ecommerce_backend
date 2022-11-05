import Model from "../../../models";

export const getAllUsers = ({ offset = 0, limit = 10 }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await Model.users.findAll({
                offset: offset,
                limit: limit,
            });
            resolve(data);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

export const getById = ({ id = 0 }) => {

    return new Promise(async (resolve, reject) => {
        try {
            const data = await Model.users.findByPk(id);
            resolve(data);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

export const CreateUser = ({ insert_field = {} }) => {

    return new Promise(async (resolve, reject) => {
        try {
            const data = await Model.users.create({
                ...insert_field
            });
            resolve(data);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

export const UpdateUser = ({ update_field = {}, id }) => {

    return new Promise(async (resolve, reject) => {
        try {
            const data = await Model.users.update(
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
