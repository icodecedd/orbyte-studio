import express from "express";
import { sendApplicationEmail } from "../controllers/gmailController.js";

const router = express.Router();

router.post("/submit-application", sendApplicationEmail);

export default router;
