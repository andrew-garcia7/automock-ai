"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const router = (0, express_1.Router)();
router.post("/draft", async (req, res) => {
    try {
        const { id, title, payload, templateKey, atsScore, userId } = req.body || {};
        if (!payload) {
            return res.status(400).json({ success: false, error: "payload is required" });
        }
        const data = {
            title: title || "Untitled Resume",
            payload: typeof payload === "string" ? payload : JSON.stringify(payload),
            templateKey: templateKey || "software_engineer",
            atsScore: typeof atsScore === "number" ? atsScore : null,
            userId: userId ?? null,
        };
        if (id) {
            const updated = await db_1.prisma.resumeDraft.update({
                where: { id: Number(id) },
                data,
            });
            return res.json({ success: true, draft: updated });
        }
        const created = await db_1.prisma.resumeDraft.create({ data });
        return res.json({ success: true, draft: created });
    }
    catch (err) {
        console.error("RESUME DRAFT SAVE ERROR:", err);
        return res.status(500).json({ success: false, error: err.message });
    }
});
router.get("/draft/:id", async (req, res) => {
    try {
        const draft = await db_1.prisma.resumeDraft.findUnique({
            where: { id: Number(req.params.id) },
        });
        if (!draft)
            return res.status(404).json({ success: false, error: "Draft not found" });
        return res.json({ success: true, draft });
    }
    catch (err) {
        console.error("RESUME DRAFT GET ERROR:", err);
        return res.status(500).json({ success: false, error: err.message });
    }
});
exports.default = router;
