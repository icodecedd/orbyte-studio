import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import contactRoutes from "./routes/contactRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(morgan("dev"));

app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
