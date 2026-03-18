
import { Router } from "express";

console.log("NEW DEPLOY VERSION 🔥");

import multer from "multer";
import path from "path";
import fs from "fs";

import { prisma } from "../db";
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
START INTERVIEW
================================ */
router.post("/start", upload.single("resume"), async (req, res) => {
try {
const category = req.body.category || "technical";
const level = req.body.level || "junior";
const count = req.body.count || "4";


const qcount = Math.max(1, Math.min(20, Number(count) || 4));

if (req.file) {
  console.log("Resume uploaded:", req.file.filename);
}

let questions: string[] = [];

try {
  questions = await generateQuestionPlan(
    category,
    level,
    "",
    qcount
  );
} catch {
  questions = [
    "Explain event loop in JavaScript.",
    "What is closure?",
    "Explain let vs var vs const.",
    "What is a hash table?",
  ].slice(0, qcount);
}

const interview = await prisma.interview.create({
  data: {
    userId: null,
    category,
    level,
    score: null,
    questions: JSON.stringify(questions),
  },
});

return res.json({
  success: true,
  interviewId: interview.id,
  questions,
});


} catch (err: any) {
console.error("START ERROR:", err);
return res.status(500).json({
success: false,
error: err.message,
});
}
});

/* ===============================
SUBMIT ANSWER
================================ */
router.post("/:id/answer", async (req, res) => {
try {
const interviewId = Number(req.params.id);
let { question, answer } = req.body;


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

await prisma.response.create({
  data: {
    interviewId,
    question,
    answer,
    score: result.score,
  },
});

return res.json({
  success: true,
  score: result.score,
  feedback: result.feedback,
});


} catch (err: any) {
console.error("ANSWER ERROR:", err);
return res.status(500).json({
success: false,
error: err.message,
});
}
});

/* ===============================
END INTERVIEW
================================ */
router.post("/:id/end", async (req, res) => {
try {
const interviewId = Number(req.params.id);


const responses = await prisma.response.findMany({
  where: { interviewId },
});

const avg =
  responses.length > 0
    ? responses.reduce((s, r) => s + r.score, 0) /
      responses.length
    : 0;

await prisma.interview.update({
  where: { id: interviewId },
  data: {
    score: avg,
    endedAt: new Date(),
  },
});

return res.json({
  success: true,
  finalScore: avg,
});


} catch (err: any) {
console.error("END ERROR:", err);
return res.status(500).json({
success: false,
error: err.message,
});
}
});


/* ===============================
GET INTERVIEW LIST (HISTORY)
================================ */
router.get("/list", async (req, res) => {
  try {
    const interviews = await prisma.interview.findMany({
      orderBy: { startedAt: "desc" },
      include: {
        responses: true,
      },
    });

    const formatted = interviews.map((i) => ({
      id: i.id,
      category: i.category,
      level: i.level,
      score: i.score,
      startedAt: i.startedAt,
      endedAt: i.endedAt,
      questions: i.questions ? JSON.parse(i.questions) : [],
      responses: i.responses || [],
      responseCount: i.responses?.length || 0,
    }));

    res.json(formatted);

  } catch (err: any) {
    console.error("LIST ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

/* ===============================
CLEAR ALL HISTORY
================================ */
router.delete("/clear", async (req, res) => {
  try {
    await prisma.response.deleteMany({});
    await prisma.interview.deleteMany({});

    res.json({ success: true, message: "History cleared" });

  } catch (err: any) {
    console.error("CLEAR ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;