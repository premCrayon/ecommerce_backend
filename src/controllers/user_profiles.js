import Model from "../../models"
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


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
export const upsertUser = ({ insert_field = {} }) => {

    return new Promise(async (resolve, reject) => {
        try {

            
            if(insert_field?.id){
                
              await Model.UserProfiles.update({...insert_field},{ where: { id: insert_field?.id } });
            }
            else{

              const encrptPassword = await bcryptjs.hash(insert_field?.password, 10);
              await Model.UserProfiles.create({...insert_field,password:encrptPassword});
            }

            resolve(`User Upsert Successfully`);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};


//login
export const login = ({ email_id, password }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await Model.UserProfiles.findOne({
          where: { email_id },
          include:{
            model: Model.RoleMaster,
            required: false,
            attributes:["name"]
          }, 
        });

        if (!data) {
          return resolve({ type: "Error", message: "User not found" });
        }

        const isPasswordCompare = await bcryptjs.compare(
          password,
          data?.password
        );
        if (!isPasswordCompare) {
          return resolve({ type: "Error", message: "Incorrect password!" });
        }
        var token = jwt.sign(
          { id: data?.id, role_type: data?.RoleMaster?.name },
          "authToken"
        );
        resolve(token);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };
  