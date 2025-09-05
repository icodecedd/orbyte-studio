import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import contactRoutes from "./routes/contactRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_URL =
  process.env.CLIENT_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://your-frontend-app.vercel.app"
    : "http://localhost:5173");

app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: CLIENT_URL,
  })
);
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Backend is running!", clientUrl: CLIENT_URL });
});

app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Accepting requests from: ${CLIENT_URL}`);
});

export default app;
