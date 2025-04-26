const { Router } = require("express");
const adminRouter = Router();
const adminController = require("../controllers/adminController");
const { authenticateToken } = require("../middlewares/authMiddleware");

// Public Routes
adminRouter.get("/login", adminController.loginPage);
adminRouter.post("/login", adminController.adminLogin);

adminRouter.get("/register", adminController.registerPage);
adminRouter.post("/register", adminController.registerAdmin);

// Protected Routes
adminRouter.use(authenticateToken);

adminRouter.get("/adminDashboard", adminController.adminDashboard);
adminRouter.get("/form", adminController.formPage);
adminRouter.get("/logout", adminController.logout);

module.exports = adminRouter;
