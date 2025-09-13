import express from "express";
import {
  sendApplicationEmail,
  sendFeedbackEmail,
} from "../controllers/gmailController.js";

const router = express.Router();

router.post("/submit-application", sendApplicationEmail);
router.post("/submit-feedback", sendFeedbackEmail);

export default router;
