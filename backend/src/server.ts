import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import interviewRoutes from "./routes/interview";
import resumeRoutes from "./routes/resume";
import resumeBuilderRoutes from "./routes/resumeBuilder";
import codeRoutes from "./routes/code";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/interview", interviewRoutes);
app.use("/resume", resumeRoutes);
app.use("/resume-builder", resumeBuilderRoutes);
app.use("/code", codeRoutes);

// Root route
app.get("/", (req, res) => {
  console.log("ROOT HIT");
  res.send("🚀 AutoMock AI Backend Running");
});

// Error handler (LAST middleware)
app.use((err: any, req: any, res: any, next: any) => {
  console.error("ERROR:", err);
  res.status(500).send("Server Error");
});

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});