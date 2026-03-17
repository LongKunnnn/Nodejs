import db from "../models/index";
import bycrypt from 'bcryptjs';
let handleUserLogin = (email, password) => {
    return new Promise (async(resolve, reject) => {
        try{
            let userData = {};
            let isExist = await checkUserEmail(email);
            if(isExist){
                //user already exist
                //compare password
                let user = await db.User.findOne({
                    attributes: ['email', 'roleId', 'password'],
                    where: { email: email },
                    raw: true
                });
                if (user){
                    let check = await bycrypt.compareSync(password, user.password);
                    if(check) {
                        userData.errCode = 0;
                        userData.message = "Ok";

                        delete user.password;
                        userData.user = user;
                    } else{
                        userData.errCode = 2;
                        userData.errMessage = "Your password isn't correct. Please try again!"
                    }
                } else{
                    userData.errCode = 2;
                    userData.errMessage = "Your password isn't correct. Please try again!"
                }
            
            } else{
                //return error
                userData.errCode = 1;
                userData.errMessage = "Your email isn't exist in our system. Please try other email!"
                
            }
            resolve(userData)

        }catch(e){
            reject(e)
        }
    })
}


let checkUserEmail = (email) => {
    return new Promise (async (resolve, reject) => {
        try{
            let user = await db.User.findOne({
                where: { email: email }
            });
            resolve(user);
        } catch(e) {
            reject(e);
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin
}