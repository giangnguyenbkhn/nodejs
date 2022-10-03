import db from "../models/index";
import CRUDServices from "../services/CRUDServices";
let getHomePage = async(req, res) => {
    try {
        let data = await db.User.findAll();

        return res.render("homepage.ejs", { data: JSON.stringify(data) });
    } catch (e) {
        console.log(e);
    }
};
let getAbout = (req, res) => {
    return res.render("./test/about.ejs");
};
let getCRUD = (req, res) => {
    return res.render("crud.ejs");
};
let postCRUD = async(req, res) => {
    let message = await CRUDServices.createNewUser(req, res);
    console.log(message);
    return res.send("crud page");
};
let displayGetCRUD = async(req, res) => {
    let data = await CRUDServices.getAllUser();
    console.log(data);
    return res.render("displayCRUD.ejs", { data: data });
};
module.exports = {
    getHomePage,
    getAbout,
    getCRUD,
    postCRUD,
    displayGetCRUD,
};
// 2