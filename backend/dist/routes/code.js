"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const router = (0, express_1.Router)();
router.post("/run", async (req, res) => {
    const { code, language } = req.body;
    if (!code || language !== "node") {
        return res.json({
            success: false,
            error: "Only JavaScript (Node.js) execution is supported",
        });
    }
    // Temp file
    const tmpDir = os_1.default.tmpdir();
    const filePath = path_1.default.join(tmpDir, `automock_${Date.now()}.js`);
    try {
        fs_1.default.writeFileSync(filePath, code, "utf8");
        (0, child_process_1.exec)(`node "${filePath}"`, { timeout: 5000 }, (err, stdout, stderr) => {
            fs_1.default.unlinkSync(filePath);
            if (err) {
                return res.json({
                    success: false,
                    error: stderr ||
                        err.message ||
                        "Runtime error occurred during execution",
                });
            }
            if (stderr) {
                return res.json({
                    success: false,
                    error: stderr,
                });
            }
            return res.json({
                success: true,
                output: stdout.trim(),
            });
        });
    }
    catch (e) {
        return res.json({
            success: false,
            error: e.message || "Execution failed",
        });
    }
});
exports.default = router;
