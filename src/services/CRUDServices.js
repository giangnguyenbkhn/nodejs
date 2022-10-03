//ma hoa password
import bcrypt from "bcryptjs";
//database
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);
let createNewUser = async(data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.body.password);
            await db.User.create({
                email: data.body.email,
                password: hashPasswordFromBcrypt,
                firstName: data.body.firstname,
                lastName: data.body.lastname,
                address: data.body.address,
                phonenumber: data.body.phonenumber,
                gender: data.body.gender === "1" ? true : false,
                roleId: data.body.roleId,
            });
            resolve("ok create a new user success");
        } catch (e) {
            reject(e);
        }
    });
};
let hashUserPassword = (password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = { createNewUser };