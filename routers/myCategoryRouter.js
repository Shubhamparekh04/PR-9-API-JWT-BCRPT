const { Router } = require("express");

const myCategoryRouter = Router();
const myCategoryController = require("../controllers/myCategoryController");
const upload = require("../middlewares/imageUpload");

myCategoryRouter.post("/createCat", upload, myCategoryController.addCat);
myCategoryRouter.get("/category/delete/:id", myCategoryController.delCat);

module.exports = myCategoryRouter;
