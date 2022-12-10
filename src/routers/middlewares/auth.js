import ErrorResponse from "../utilities/errorResponse";
import jwt from "jsonwebtoken";


export const isAuthenticated = async (req, res, next) => {

  let token = req.headers.authorization.split(" ")[1];
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  //Token Exsits
  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }      

    try {
    // verify token
    const verify = jwt.verify(token, "authToken");
    const token_details = jwt.decode(token);

    //Token Expired
    if (!verify) {
      return next(new ErrorResponse("Token in Expired", 401));
    } 
    req.body["role_type"] = token_details?.role_type;
    req.body["user_profile_id"] = token_details?.id;

  
    next();
  } catch (error) {
    console.log(error)
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
};
