import express from "express";
import cors from "cors";
import { corsOptions } from "../middleware/security.js";
import {
  getShopUsers,
  deleteSpecificUser,
} from "../controllers/shopUsers.controller.js";
const router = express.Router();
router.route("/").get(getShopUsers);
router.route("/:id").delete(deleteSpecificUser);
export default router;
