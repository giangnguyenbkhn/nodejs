import express from "express";
let configViewEngine = (app) => {
    // file static
    app.use(express.static("./src/public"));
    // set view engine
    app.set("view engine", "ejs");
    //set views
    app.set("views", "./src/views");
};
module.exports = configViewEngine;