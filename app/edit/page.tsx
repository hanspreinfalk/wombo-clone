"use client";

import { useState } from "react";
import { Sparkles, Upload, Pencil, Crown } from "lucide-react";
import { Navbar } from "@/components/navbar";

const aspectRatios = [
  { label: "1:1", w: 28, h: 28, premium: false },
  { label: "9:16", w: 20, h: 28, premium: false },
  { label: "16:9", w: 28, h: 18, premium: true },
  { label: "3:4", w: 22, h: 28, premium: true },
  { label: "4:3", w: 28, h: 22, premium: true },
];

export default function EditPage() {
  const [prompt, setPrompt] = useState("");
  const [selectedRatio, setSelectedRatio] = useState("1:1");

  return (
    <div className="flex flex-col h-screen bg-[#111111]">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-[320px] flex-shrink-0 border-r border-white/5 flex flex-col overflow-y-auto">
          <div className="p-4 flex flex-col gap-5 flex-1">
            {/* Header */}
            <div>
              <h2 className="text-2xl font-serif italic text-white mb-1">
                Edit Image
              </h2>
              <p className="text-xs text-gray-400 font-mono leading-relaxed">
                Upload up to 4 reference images and describe your edits.
              </p>
            </div>

            {/* SOURCE IMAGES */}
            <div>
              <label className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2 block">
                Source Images (0/4)
              </label>
              <div className="border-2 border-dashed border-white/10 rounded-lg p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-white/20 transition-colors">
                <Upload size={24} className="text-gray-500" />
                <p className="text-xs text-gray-400 text-center">
                  Drag & drop an image or click to browse
                </p>
              </div>
            </div>

            {/* PROMPT */}
            <div>
              <label className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2 block">
                Prompt
              </label>
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={"Describe how to edit the image\n(e.g., make the sky purple, add\nsunglasses)"}
                  maxLength={2000}
                  className="w-full h-[100px] bg-[#1a1a1a] border border-white/10 rounded-lg p-3 text-sm text-white placeholder-gray-500 resize-none focus:outline-none focus:border-purple-500/50 font-mono"
                />
                <div className="absolute bottom-2 right-2 flex items-center gap-2">
                  <span className="text-xs text-gray-500">
                    {prompt.length} / 2000
                  </span>
                  <button className="flex items-center gap-1.5 px-3 py-1 bg-[#2a2a2a] border border-white/10 rounded-md text-xs text-gray-300 hover:bg-[#333] transition-colors">
                    <Sparkles size={12} />
                    Suggest
                  </button>
                </div>
              </div>
            </div>

            {/* ASPECT RATIO */}
            <div>
              <div className="flex items-end gap-3">
                {aspectRatios.map((ratio) => (
                  <button
                    key={ratio.label}
                    onClick={() => setSelectedRatio(ratio.label)}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <div
                      className={`flex items-center justify-center rounded-md border-2 transition-colors ${
                        selectedRatio === ratio.label
                          ? "border-purple-500 bg-purple-500/20"
                          : "border-gray-600 bg-[#1a1a1a]"
                      }`}
                      style={{
                        width: `${ratio.w}px`,
                        height: `${ratio.h}px`,
                      }}
                    />
                    <div className="flex items-center gap-0.5">
                      <span
                        className={`text-[10px] ${selectedRatio === ratio.label ? "text-purple-400" : "text-gray-400"}`}
                      >
                        {ratio.label}
                      </span>
                      {ratio.premium && (
                        <Crown size={10} className="text-gray-500" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Edit Image Button - fixed at bottom */}
          <div className="p-4 border-t border-white/5">
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-gray-400 hover:bg-[#252525] hover:text-white transition-colors">
              <Pencil size={16} />
              <span className="text-sm font-medium">Edit Image</span>
            </button>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 flex flex-col overflow-y-auto p-6">
          {/* Empty State */}
          <div className="flex-1 border border-white/5 rounded-xl flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center">
                <Pencil size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Edit results will appear here
              </h3>
              <p className="text-sm text-gray-400 text-center max-w-xs font-mono">
                Upload images, describe your edit, and click
                &quot;Edit Image&quot; to get started.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
