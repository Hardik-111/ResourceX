import express  from "express";
import { getMySubject,addAllSubject,addMySubject} from "../controllers/subject.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/new",isAuthenticated, addAllSubject );
router.post("/all",isAuthenticated, addMySubject );
router.get("/:id",isAuthenticated, getMySubject );


export default router;
