import express  from "express";
import { deleteUser, login,logout, getAllUsers, getMyProfile, getUserName, registerUser, sepacialFuntion } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all",getAllUsers);
router.post("/new",registerUser);
router.post("/login",login);
router.get("/logout",logout);
router.get("/userid/special",sepacialFuntion);
router.get("/me",isAuthenticated,getMyProfile);
router.delete("/userid/:id",deleteUser);
router.get("/userid/:id/name",getUserName);


export default router;
