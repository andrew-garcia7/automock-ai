import React from "react";

interface Props {
  text: string;
}

export function TextPreview({ text }: Props) {
  if (!text) return null;
  return (
    <div className="bg-[#0f172a] border border-white/5 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">Extracted Text</h3>
        <span className="text-xs text-gray-500">{text.length} characters</span>
      </div>
      <div className="bg-black/30 rounded-xl p-4 max-h-64 overflow-y-auto text-xs text-gray-200 whitespace-pre-wrap leading-relaxed font-mono">
        {text.substring(0, 2500)}
        {text.length > 2500 && <span className="text-gray-500">... (truncated)</span>}
      </div>
    </div>
  );
}

