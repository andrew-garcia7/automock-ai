import interviewRoutes from "./routes/interview.js";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION:", err);
});

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("TEST OK");
});

app.get("/", (req, res) => {
  res.send("🚀 AutoMock AI Backend Running");
});

// 
app.get("/api", (req, res) => {
  res.send("API root working 🚀");
});

app.get("/api/interview", (req, res) => {
  res.send("Interview API working 🚀");
});


app.use("/api/interview", interviewRoutes);

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});