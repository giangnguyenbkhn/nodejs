import express from "express";
//giup server lay duoc cac tham so:query,params
import bodyParser from "body-parser";
//view engine
import configViewEngine from "../src/config/viewEngine";
//web router
import initWebRoutes from "../src/route/web";
//connect DB
import connectDB from "../src/config/connectDB";
require("dotenv").config();

let app = express();
let port = process.env.PORT || 3000;
//config app bạn có thể lấy được data form từ req.body
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

configViewEngine(app);
initWebRoutes(app);
// connect DB
connectDB();

app.listen(port, () => {
    console.log(`Backend Nodejs is running on http://localhost:${port}`);
});