import express  from "express";
import {  getMyDepartment} from "../controllers/department.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();


router.get("/:id",isAuthenticated, getMyDepartment );


export default router;