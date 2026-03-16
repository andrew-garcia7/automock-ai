// src/server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import interviewRoutes from "./routes/interview";
import resumeRoutes from "./routes/resume";
import resumeBuilderRoutes from "./routes/resumeBuilder";
import codeRoutes from "./routes/code";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static uploads
app.use("/uploads", express.static(path.join(process.cwd(), "src/uploads")));

// Routes
app.use("/interview", interviewRoutes);
app.use("/resume", resumeRoutes);
app.use("/resume-builder", resumeBuilderRoutes);
app.use("/code", codeRoutes);

// Root route (IMPORTANT for Railway)
app.get("/", (req, res) => {
  res.send("🚀 AutoMock AI Backend Running");
});

const PORT = process.env.PORT || 8080;

// Important binding for Railway
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});