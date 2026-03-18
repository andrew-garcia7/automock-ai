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
        const category = req.body.category || "technical";
        const level = req.body.level || "junior";
        const count = req.body.count || "4";
        const qcount = Math.max(1, Math.min(20, Number(count) || 4));
        if (req.file) {
            console.log("Resume uploaded:", req.file.filename);
        }
        let questions = [];
        try {
            questions = await (0, questionPlanner_1.generateQuestionPlan)(category, level, "", qcount);
        }
        catch {
            questions = [
                "Explain event loop in JavaScript.",
                "What is closure?",
                "Explain let vs var vs const.",
                "What is a hash table?",
            ].slice(0, qcount);
        }
        const interview = await db_1.prisma.interview.create({
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
        const result = await (0, answerEvaluator_1.evaluateAnswer)(question, answer);
        await db_1.prisma.response.create({
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
            ? responses.reduce((s, r) => s + r.score, 0) /
                responses.length
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
exports.default = router;
