import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAbout);
    router.get("/crud", homeController.getCRUD);
    //crud
    router.post("/post-crud", homeController.postCRUD);
    //mac dinh router deu phai bat dau bang /
    return app.use("/", router);
};
module.exports = initWebRoutes;
//1