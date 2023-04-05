import express  from "express";
import { getMySemister} from "../controllers/semister.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.get("/:id",isAuthenticated, getMySemister );


export default router;