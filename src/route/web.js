import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAbout);
    //mac dinh router deu phai bat dau bang /
    return app.use("/", router);
};
module.exports = initWebRoutes;