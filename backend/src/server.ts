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

// Static uploads (optional)
app.use("/uploads", express.static(path.join(process.cwd(), "src/uploads")));

// Mount routes
app.use("/interview", interviewRoutes);
app.use("/resume", resumeRoutes);
app.use("/resume-builder", resumeBuilderRoutes);
app.use("/code", codeRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
