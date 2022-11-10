import express from "express";
import cors from "cors";
import { checkAllInfoIsThere } from "../middleware/index.js";
import { corsOptions } from "../middleware/security.js";
import {
  getRecords,
  updateRecords,
  addRecord,
  deleteRecord,
  getSpecificRecord,
  deleteSpecificRecord,
} from "../controllers/records.controller.js";
const router = express.Router();
router
  .route("/")
  .post(checkAllInfoIsThere, addRecord)
  .get(getRecords)
  .put(updateRecords)
  .delete(deleteRecord);
router
  .route("/:id")
  .get(cors(corsOptions), getSpecificRecord)
  .delete(cors(corsOptions), deleteSpecificRecord);

export default router;
