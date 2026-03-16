import React, { useEffect, useState } from "react";
import axios from "axios";

interface Interview {
  id: number;
  category: string;
  level: string;
  score: number | null;
  startedAt: string;
  endedAt: string | null;
  questions: string[];
  responses: Array<{
    question: string;
    answer: string;
    score: number;
    createdAt: string;
  }>;
  responseCount: number;
}

export default function History() {
  const [list, setList] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [clearing, setClearing] = useState(false);

  const loadHistory = () => {
    setLoading(true);
    axios
      .get("http://localhost:4000/interview/list")
      .then((r) => setList(Array.isArray(r.data) ? r.data : []))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const clearHistory = async () => {
    if (!window.confirm("Are you sure you want to clear all interview history? This action cannot be undone.")) {
      return;
    }

    setClearing(true);
    try {
      await axios.delete("http://localhost:4000/interview/clear");
      setList([]);
      alert("History cleared successfully");
    } catch (err) {
      console.error("Clear history error:", err);
      alert("Failed to clear history: " + (err?.response?.data?.error || err?.message || "Unknown error"));
    } finally {
      setClearing(false);
    }
  };

  if (loading) return <div className="p-10 text-white">Loading…</div>;

  if (!list.length)
    return (
      <div className="min-h-screen bg-[#0a0f1f] text-white p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl">Interview History</h1>
        </div>
        <div className="bg-[#111829] p-8 rounded-lg text-center">
          <p className="text-gray-400 text-lg">No interviews yet.</p>
          <p className="text-gray-500 text-sm mt-2">Start a new interview to see your history here.</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0a0f1f] text-white p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl">Interview History</h1>
        <button
          onClick={clearHistory}
          disabled={clearing}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded transition-colors text-white"
        >
          {clearing ? "Clearing..." : "Clear History"}
        </button>
      </div>

      {list.map((i) => (
        <div key={i.id} className="bg-[#111829] p-6 mb-4 rounded-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold">Interview #{i.id}</h2>
                {i.endedAt ? (
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Completed</span>
                ) : (
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">In Progress</span>
                )}
              </div>
              <div className="text-sm text-gray-400 mt-1">
                <div>Category: {i.category} | Level: {i.level}</div>
                <div>Started: {formatDate(i.startedAt)}</div>
                {i.endedAt && <div>Ended: {formatDate(i.endedAt)}</div>}
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">
                Score: {i.score !== null && i.score !== undefined ? Number(i.score).toFixed(2) : "N/A"}
              </div>
              <div className="text-sm text-gray-400">
                {i.responseCount || 0} response{i.responseCount !== 1 ? "s" : ""}
              </div>
            </div>
          </div>

          <button
            onClick={() => setExpandedId(expandedId === i.id ? null : i.id)}
            className="text-cyan-400 hover:text-cyan-300 text-sm mb-2"
          >
            {expandedId === i.id ? "▼ Hide Details" : "▶ Show Details"}
          </button>

          {expandedId === i.id && (
            <div className="mt-4 space-y-4 border-t border-gray-700 pt-4">
              {i.questions && i.questions.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Questions:</h3>
                  <ol className="list-decimal list-inside space-y-1 text-gray-300">
                    {i.questions.map((q, idx) => (
                      <li key={idx} className="ml-2">{q}</li>
                    ))}
                  </ol>
                </div>
              )}

              {i.responses && i.responses.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Answers & Scores:</h3>
                  <div className="space-y-3">
                    {i.responses.map((r, idx) => (
                      <div key={idx} className="bg-[#1a2337] p-4 rounded">
                        <div className="font-medium text-cyan-400 mb-1">
                          Q: {r.question}
                        </div>
                        <div className="text-gray-300 mb-2">
                          A: {r.answer}
                        </div>
                        <div className="text-sm">
                          Score: <span className="font-semibold">
                            {r.score !== null && r.score !== undefined ? r.score.toFixed(2) : "N/A"}
                          </span> | 
                          Submitted: {formatDate(r.createdAt)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(!i.responses || i.responses.length === 0) && (
                <div className="text-gray-400 text-sm">No responses recorded.</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
