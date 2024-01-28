import express from "express";
import { getAll } from "../controllers/winesController.js";

const router = express.Router();

router.get("/", getAll);

export default router;
