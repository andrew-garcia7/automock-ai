import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

import { generateQuestionPlan } from "../utils/questionPlanner";
import { evaluateAnswer } from "../utils/answerEvaluator";

const router = Router();

/* ===============================
UPLOAD CONFIG
================================ */
const uploadsDir = path.join(process.cwd(), "src", "uploads");
if (!fs.existsSync(uploadsDir)) {
fs.mkdirSync(uploadsDir, { recursive: true });
}

const upload = multer({
dest: uploadsDir,
limits: { fileSize: 10 * 1024 * 1024 },
});

/* ===============================
START INTERVIEW (WORKING ✅)
================================ */
router.post("/start", upload.single("resume"), async (req, res) => {
try {
const { category = "technical", level = "junior", count = "4" } = req.body;
const qcount = Math.max(1, Math.min(20, Number(count) || 4));

```
let resumeText = "";

// ✅ Safe upload (no parsing)
if (req.file) {
  console.log("Resume uploaded:", req.file.filename);
}

// ---- Generate questions
let questions: string[] = [];
try {
  questions = await generateQuestionPlan(
    category,
    level,
    resumeText,
    qcount
  );
} catch {
  questions = [
    "Explain event loop in JavaScript.",
    "What is closure?",
    "Explain differences between let, var and const.",
    "Describe how a hash table works.",
  ].slice(0, qcount);
}

// ✅ TEMP interview (no DB)
const interview = {
  id: Math.floor(Math.random() * 10000),
};

return res.json({
  success: true,
  interviewId: interview.id,
  questions,
  resumeId: null,
});
```

} catch (err: any) {
console.error("START ERROR:", err);
return res.status(500).json({
success: false,
error: err.message,
});
}
});

/* ===============================
DUMMY ANSWER API (SAFE VERSION)
================================ */
router.post("/:id/answer", async (req, res) => {
try {
let { question, answer } = req.body;

```
question =
  typeof question === "string"
    ? question.trim()
    : JSON.stringify(question);

answer =
  typeof answer === "string"
    ? answer.trim()
    : JSON.stringify(answer);

if (!question || !answer) {
  return res.status(400).json({
    success: false,
    error: "Question or answer missing",
  });
}

const result = await evaluateAnswer(question, answer);

return res.json({
  success: true,
  score: result.score,
  feedback: result.feedback,
});
```

} catch (err: any) {
console.error("ANSWER ERROR:", err);
return res.status(500).json({
success: false,
error: err.message,
});
}
});

/* ===============================
END INTERVIEW (DUMMY)
================================ */
router.post("/:id/end", async (req, res) => {
return res.json({
success: true,
finalScore: Math.floor(Math.random() * 10),
});
});

/* ===============================
LIST (EMPTY)
================================ */
router.get("/list", async (req, res) => {
return res.json([]);
});

/* ===============================
GET INTERVIEW (DUMMY)
================================ */
router.get("/:id", async (req, res) => {
return res.json({});
});

export default router;
