import db from "../models/index";
import userService from "../services/userService";
let handleLogin = async(req, res) => {
    // nhan email va password tu client, cu the la tu file userService ben fe
    let email = req.body.email;
    let password = req.body.password;
    //check email exist
    //compare password
    //return userInfor
    //access_token:JWT(json web token)
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: "Missing inputs parameter",
        });
    }
    let userData = await userService.handleUserLogin(email, password);
    //tra data ve cho client
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {},
    });
};
module.exports = { handleLogin };