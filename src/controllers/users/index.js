import Model from "../../../models";

export const getAllUsers = ({ offset = 0, limit = 10 }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await Model.user.findAll({
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
    console.log("offset", id);
    return new Promise(async (resolve, reject) => {
        try {
            const data = await Model.user.findByPk(id);
            resolve(data);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

export const CreateUser = ({ firstName, lastName, email }) => {
    console.log(firstName, lastName, email);
    return new Promise(async (resolve, reject) => {
        try {
            const data = await Model.user.create({
                firstName,
                lastName,
                email,
            });
            resolve(data);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

export const UpdateUser = ({ firstName, lastName, email, id }) => {
    console.log(firstName, lastName, email, id);
    return new Promise(async (resolve, reject) => {
        try {
            const data = await Model.user.update(
                {
                    firstName,
                    lastName,
                    email,
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
