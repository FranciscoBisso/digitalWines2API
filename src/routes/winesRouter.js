import express from "express";
import winesController from "../controllers/winesController.js";

const router = express.Router();

router.get("/", winesController.getAll);

export default router;
