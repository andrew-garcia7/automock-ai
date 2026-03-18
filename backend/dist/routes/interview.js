"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const db_1 = require("../db");
const questionPlanner_1 = require("../utils/questionPlanner");
const answerEvaluator_1 = require("../utils/answerEvaluator");
const router = (0, express_1.Router)();
/* ===============================
   UPLOAD CONFIG
================================ */
const uploadsDir = path_1.default.join(process.cwd(), "src", "uploads");
if (!fs_1.default.existsSync(uploadsDir)) {
    fs_1.default.mkdirSync(uploadsDir, { recursive: true });
}
const upload = (0, multer_1.default)({
    dest: uploadsDir,
    limits: { fileSize: 10 * 1024 * 1024 },
});
/* ===============================
   START INTERVIEW
================================ */
router.post("/start", upload.single("resume"), async (req, res) => {
    try {
        const { category = "technical", level = "junior", count = "4" } = req.body;
        const qcount = Math.max(1, Math.min(20, Number(count) || 4));
        let resumeText = "";
        let resumeRecordId = null;
        // ---- Resume parsing (optional)
        if (req.file) {
            console.log("Resume uploaded:", req.file.filename);
        }
        // ---- Generate questions (NO API KEY)
        let questions = [];
        try {
            questions = await (0, questionPlanner_1.generateQuestionPlan)(category, level, resumeText, qcount);
        }
        catch {
            questions = [
                "Explain event loop in JavaScript.",
                "What is closure?",
                "Explain differences between let, var and const.",
                "Describe how a hash table works.",
            ].slice(0, qcount);
        }
        // ---- CREATE INTERVIEW (SQLite-safe)
        const interview = await db_1.prisma.interview.create({
            data: {
                userId: null,
                category,
                level,
                score: null,
                questions: JSON.stringify(questions), // 🔥 CRITICAL
            },
        });
        return res.json({
            success: true,
            interviewId: interview.id,
            questions,
            resumeId: resumeRecordId,
        });
    }
    catch (err) {
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
        // ---- FORCE STRING (NO 400 EVER)
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
        const interview = await db_1.prisma.interview.findUnique({
            where: { id: interviewId },
        });
        if (!interview) {
            return res.status(400).json({
                success: false,
                error: "Interview not found",
            });
        }
        const result = await (0, answerEvaluator_1.evaluateAnswer)(question, answer);
        const saved = await db_1.prisma.response.create({
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
            saved,
        });
    }
    catch (err) {
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
        const responses = await db_1.prisma.response.findMany({
            where: { interviewId },
        });
        const avg = responses.length > 0
            ? Number((responses.reduce((s, r) => s + r.score, 0) /
                responses.length).toFixed(2))
            : 0;
        await db_1.prisma.interview.update({
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
    }
    catch (err) {
        console.error("END ERROR:", err);
        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
});
/* ===============================
   HISTORY LIST
================================ */
router.get("/list", async (req, res) => {
    try {
        const list = await db_1.prisma.interview.findMany({
            orderBy: { id: "desc" },
            include: { responses: true },
        });
        return res.json(list.map((i) => ({
            id: i.id,
            category: i.category,
            level: i.level,
            score: i.score ?? null,
            startedAt: i.startedAt,
            endedAt: i.endedAt,
            questions: i.questions ? JSON.parse(i.questions) : [],
            responses: i.responses.map((r) => ({
                question: r.question,
                answer: r.answer,
                score: r.score,
                createdAt: r.createdAt,
            })),
            responseCount: i.responses.length,
        })));
    }
    catch (err) {
        console.error("LIST ERROR:", err);
        return res.json([]);
    }
});
/* ===============================
   CLEAR HISTORY
================================ */
router.delete("/clear", async (req, res) => {
    try {
        // Delete all responses first (foreign key constraint)
        await db_1.prisma.response.deleteMany({});
        // Then delete all interviews
        await db_1.prisma.interview.deleteMany({});
        return res.json({
            success: true,
            message: "All interview history cleared",
        });
    }
    catch (err) {
        console.error("CLEAR ERROR:", err);
        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
});
/* ===============================
   GET INTERVIEW
================================ */
router.get("/:id", async (req, res) => {
    try {
        const interviewId = Number(req.params.id);
        const interview = await db_1.prisma.interview.findUnique({
            where: { id: interviewId },
            include: { responses: true },
        });
        if (!interview)
            return res.json({});
        return res.json({
            ...interview,
            questions: interview.questions
                ? JSON.parse(interview.questions)
                : [],
        });
    }
    catch {
        return res.json({});
    }
});
exports.default = router;
