import express from 'express';
import homeController from '../controllers/homeController.js';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomepage);
    router.get("/about", homeController.getAboutPage);
    router.get("/crud", homeController.getCRUD);


    return app.use("/", router);
}

module.exports = initWebRoutes;