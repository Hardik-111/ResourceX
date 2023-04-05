import express  from "express";
import { getMyTopic,addMyTopic,addAllTopic} from "../controllers/topic.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/new",isAuthenticated, addAllTopic );
router.post("/all",isAuthenticated, addMyTopic );
router.get("/:id",isAuthenticated, getMyTopic );


export default router;