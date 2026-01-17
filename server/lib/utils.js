import jwt from "jsonwebtoken"

//function to generta token for the users
export const generateToken = (userId) =>{
    const token = jwt.sign({userId},process.env.JWT_SECRET);
    return token;
}