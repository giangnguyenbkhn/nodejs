import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAbout);
    router.get("/crud", homeController.getCRUD);
    //crud
    //create
    router.post("/post-crud", homeController.postCRUD);
    //read
    router.get("/get-crud", homeController.displayGetCRUD);
    //update
    router.get("/edit-crud", homeController.getEditCRUD);
    router.post("/put-crud", homeController.putCRUD);
    //delete
    // doi voi 1 duong link phai su dung method get
    router.get("/delete-crud", homeController.deleteCRUD);
    //API
    //API login
    router.post("/api/login", userController.handleLogin);
    //mac dinh router deu phai bat dau bang /
    return app.use("/", router);
};
module.exports = initWebRoutes;
//1