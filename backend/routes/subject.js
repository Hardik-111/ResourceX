import express  from "express";
import { getMySubject} from "../controllers/subject.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.get("/:id",isAuthenticated, getMySubject );


export default router;