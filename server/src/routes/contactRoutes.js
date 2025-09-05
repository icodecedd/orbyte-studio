import express from "express";
import { contactUs } from "../controllers/contactController.js";

const router = express.Router();

router.post("/submit-application", contactUs);

export default router;
