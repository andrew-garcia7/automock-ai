import React, { useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor";
import axios from "axios";

type Language = "javascript" | "python" | "java" | "cpp";
type Theme = "dark" | "light" | "dracula";

const SAMPLE_CODE: Record<Language, string> = {
  javascript: `// JavaScript Example
function greet(name) {
  return "Hello, " + name;
}

console.log(greet("AutoMock"));

const nums = [1,2,3,4];
console.log(nums.map(n => n * 2));`,

  python: `# Python Example
def greet(name):
    return "Hello " + name

print(greet("World"))`,

  java: `// Java Example
class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`,

  cpp: `// C++ Example
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World";
  return 0;
}`
};

const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "⚡", exec: true },
  { id: "python", name: "Python", icon: "🐍", exec: false },
  { id: "java", name: "Java", icon: "☕", exec: false },
  { id: "cpp", name: "C++", icon: "⚙️", exec: false }
] as const;

export default function Coding() {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [language, setLanguage] = useState<Language>("javascript");
  const [theme, setTheme] = useState<Theme>("dracula");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiOn, setAiOn] = useState(false);
  const [aiHints, setAiHints] = useState<string[]>([]);

  /* ================= THEME ================= */
  useEffect(() => {
    monaco.editor.defineTheme("dracula", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "6272a4" },
        { token: "string", foreground: "f1fa8c" },
        { token: "keyword", foreground: "ff79c6" },
        { token: "number", foreground: "bd93f9" }
      ],
      colors: { "editor.background": "#282a36" }
    });
  }, []);

  /* ================= INIT EDITOR ================= */
  useEffect(() => {
    if (!containerRef.current) return;

    editorRef.current = monaco.editor.create(containerRef.current, {
      value: SAMPLE_CODE.javascript,
      language: "javascript",
      theme: "dracula",
      fontSize: 14,
      minimap: { enabled: false },
      automaticLayout: true
    });

    editorRef.current.onDidChangeModelContent(() => {
      if (!aiOn) return;
      const code = editorRef.current!.getValue();
      const hints: string[] = [];

      if (!code.includes("return")) {
        hints.push("Function without return detected.");
      }
      if (code.includes("for") && code.includes("for")) {
        hints.push("Nested loops detected → possible O(n²).");
      }
      if ((code.match(/{/g)?.length || 0) !== (code.match(/}/g)?.length || 0)) {
        hints.push("Unbalanced { } braces detected.");
      }

      setAiHints(hints);
    });

    return () => editorRef.current?.dispose();
  }, [aiOn]);

  /* ================= LANGUAGE CHANGE ================= */
  useEffect(() => {
    if (!editorRef.current) return;
    const model = editorRef.current.getModel();
    if (!model) return;

    monaco.editor.setModelLanguage(model, language);
    editorRef.current.setValue(SAMPLE_CODE[language]);
    setOutput("");
    setAiHints([]);
  }, [language]);

  /* ================= THEME CHANGE ================= */
  useEffect(() => {
    monaco.editor.setTheme(
      theme === "dark" ? "vs-dark" : theme === "light" ? "vs" : "dracula"
    );
  }, [theme]);

  /* ================= RUN CODE ================= */
  const runCode = async () => {
    const code = editorRef.current?.getValue() || "";

    if (language !== "javascript") {
      setOutput(
`⚠ ${language.toUpperCase()} execution disabled.

✔ Syntax highlighting enabled
✔ AI reasoning enabled
✖ Runtime execution requires sandbox

Explain logic verbally in interviews.`
      );
      return;
    }

    try {
      setLoading(true);
      setOutput("");

      const res = await axios.post("http://localhost:4000/code/run", {
        code,
        language: "node"
      });

      if (res.data.success) {
        setOutput(res.data.output || "");
      } else {
        setOutput(res.data.error || "Execution failed");
      }
    } catch {
      setOutput("❌ Runtime Error");
    } finally {
      setLoading(false);
    }
  };

  /* ================= RESET ================= */
  const resetCode = () => {
    editorRef.current?.setValue(SAMPLE_CODE[language]);
    setOutput("");
    setAiHints([]);
  };

  /* ================= OUTPUT RENDER ================= */
  const renderOutput = () =>
    output.split("\n").map((line, i) => {
      if (line.toLowerCase().includes("error"))
        return <div key={i} className="text-red-400">⛔ {line}</div>;
      if (line.toLowerCase().includes("warn"))
        return <div key={i} className="text-yellow-400">⚠ {line}</div>;
      if (line === "true" || line === "false")
        return <div key={i} className="text-yellow-300">{line}</div>;
      if (!isNaN(Number(line)))
        return <div key={i} className="text-cyan-400">{line}</div>;
      return <div key={i} className="text-green-400">{line}</div>;
    });

  return (
    <div className="min-h-screen bg-[#0a0f1f] text-white p-6">
      <h1 className="text-2xl font-semibold mb-4">💻 Coding Playground</h1>

      {/* CONTROLS */}
      <div className="flex flex-wrap gap-3 mb-4">
        {LANGUAGES.map(l => (
          <button
            key={l.id}
            onClick={() => setLanguage(l.id)}
            className={`px-4 py-2 rounded-lg border transition-all
              ${language === l.id
                ? "bg-cyan-500/20 border-cyan-400 scale-105"
                : "bg-white/5 border-white/10 hover:bg-white/10"}`}
          >
            {l.icon} {l.name}
          </button>
        ))}

        <div className="ml-auto flex gap-2">
          {(["dark","light","dracula"] as Theme[]).map(t => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`px-3 py-2 rounded-lg
                ${theme === t
                  ? "bg-purple-500/30 border border-purple-400"
                  : "bg-white/5"}`}
            >
              {t}
            </button>
          ))}

          <button
            onClick={() => setAiOn(!aiOn)}
            className={`px-3 py-2 rounded-lg ${aiOn ? "bg-green-500/30" : "bg-white/5"}`}
          >
            🤖 AI {aiOn ? "ON" : "OFF"}
          </button>

          <button onClick={runCode} className="px-4 py-2 bg-cyan-500 rounded-lg">
            ▶ Run
          </button>

          <button onClick={resetCode} className="px-4 py-2 bg-gray-600 rounded-lg">
            Reset
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-[3fr_2fr] gap-4">
        <div className="rounded-xl overflow-hidden border border-white/10">
          <div ref={containerRef} style={{ height: 420 }} />
        </div>

        <div className="rounded-xl bg-black border border-white/10 p-4 font-mono text-sm animate-fadeIn">
          <div className="flex justify-between text-xs text-gray-400 border-b border-white/10 pb-1 mb-2">
            <span>🖥 TERMINAL</span>
            <span>{language === "javascript" ? "Node.js" : "Explanation Mode"}</span>
          </div>

          {loading ? (
            <div className="text-cyan-400 animate-pulse">⏳ Running...</div>
          ) : (
            <pre className="whitespace-pre-wrap">{renderOutput()}</pre>
          )}
        </div>
      </div>

      {/* AI PANEL */}
      {aiOn && aiHints.length > 0 && (
        <div className="mt-4 bg-[#0b1222] border border-white/10 rounded-xl p-4">
          <h3 className="text-sm font-semibold mb-2">🤖 AI Interview Assistant</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            {aiHints.map((h, i) => (
              <li key={i} className="text-cyan-400">{h}</li>
            ))}
          </ul>
        </div>
      )}

      {/* FOOTER */}
      <div className="mt-4 text-xs text-gray-400 flex justify-between items-center">
        <span className="font-semibold text-red-400">
          ⚠ Live execution: JavaScript only
        </span>
        <span>⌨ Ctrl + Enter</span>
        <span className="font-bold text-green-400 animate-pulse">
          🚀 Interview-Grade Environment
        </span>
      </div>
    </div>
  );
}
