import { Router } from "express";
import { exec } from "child_process";
import fs from "fs";
import path from "path";
import os from "os";

const router = Router();

router.post("/run", async (req, res) => {
  const { code, language } = req.body;

  if (!code || language !== "node") {
    return res.json({
      success: false,
      error: "Only JavaScript (Node.js) execution is supported",
    });
  }

  // Temp file
  const tmpDir = os.tmpdir();
  const filePath = path.join(tmpDir, `automock_${Date.now()}.js`);

  try {
    fs.writeFileSync(filePath, code, "utf8");

    exec(
      `node "${filePath}"`,
      { timeout: 5000 },
      (err, stdout, stderr) => {
        fs.unlinkSync(filePath);

        if (err) {
          return res.json({
            success: false,
            error:
              stderr ||
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
      }
    );
  } catch (e: any) {
    return res.json({
      success: false,
      error: e.message || "Execution failed",
    });
  }
});

export default router;



