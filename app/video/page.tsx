"use client";

import { useState } from "react";
import { Sparkles, Upload, LayoutGrid } from "lucide-react";
import { Navbar } from "@/components/navbar";

const videoStyles = [
  { name: "No Style", badge: null, pro: false, color: "#1a1a1a", hasIcon: true },
  { name: "Anime", badge: "STANDARD", pro: false, color: "#6B4E8B" },
  { name: "Oil on Canvas", badge: "STANDARD", pro: false, color: "#7B6B3B" },
  { name: "Realistic", badge: "STANDARD", pro: false, color: "#5B7B6B" },
  { name: "Black and White", badge: "PRO", pro: true, color: "#4B4B4B" },
  { name: "Inked", badge: "PRO", pro: true, color: "#6B5B7B" },
  { name: "Low-Poly", badge: "PRO", pro: true, color: "#8B5B6B" },
  { name: "Pixel", badge: "PRO", pro: true, color: "#7B6B8B" },
  { name: "Vaporwave", badge: "PRO", pro: true, color: "#8B6B7B" },
];

const videoAspectRatios = [
  { label: "16:9", w: 36, h: 22 },
  { label: "9:16", w: 22, h: 36 },
  { label: "1:1", w: 28, h: 28 },
];

export default function VideoPage() {
  const [prompt, setPrompt] = useState("");
  const [generationMode, setGenerationMode] = useState<"Styles" | "Models">("Styles");
  const [styleFilter, setStyleFilter] = useState<"All" | "Standard" | "PRO">("All");
  const [selectedStyle, setSelectedStyle] = useState("No Style");
  const [selectedDuration, setSelectedDuration] = useState("3s");
  const [selectedRatio, setSelectedRatio] = useState("16:9");

  return (
    <div className="flex flex-col h-screen bg-[#111111]">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-[320px] flex-shrink-0 border-r border-white/5 flex flex-col overflow-y-auto">
          <div className="p-4 flex flex-col gap-5 flex-1">
            {/* PROMPT */}
            <div>
              <label className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2 block">
                Prompt
              </label>
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe what you want to generate"
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

            {/* GENERATION MODE */}
            <div>
              <label className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2 block">
                Generation Mode
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setGenerationMode("Styles")}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    generationMode === "Styles"
                      ? "bg-purple-600 text-white"
                      : "bg-[#1a1a1a] border border-white/10 text-gray-400 hover:text-white"
                  }`}
                >
                  Styles
                </button>
                <button
                  onClick={() => setGenerationMode("Models")}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    generationMode === "Models"
                      ? "bg-purple-600 text-white"
                      : "bg-[#1a1a1a] border border-white/10 text-gray-400 hover:text-white"
                  }`}
                >
                  Models
                </button>
              </div>
            </div>

            {/* STYLE */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
                  Style
                </label>
                <div className="flex items-center gap-1">
                  {(["All", "Standard", "PRO"] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setStyleFilter(filter)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        styleFilter === filter
                          ? "bg-purple-600 text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Style Cards Grid */}
              <div className="grid grid-cols-3 gap-2">
                {videoStyles.map((style) => (
                  <button
                    key={style.name}
                    onClick={() => setSelectedStyle(style.name)}
                    className="text-left"
                  >
                    <div
                      className={`relative aspect-square rounded-lg overflow-hidden flex items-end p-2 border-2 transition-colors ${
                        selectedStyle === style.name
                          ? "border-purple-500"
                          : "border-transparent"
                      }`}
                      style={{ backgroundColor: style.color }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Badge */}
                      {style.badge && (
                        <span
                          className={`absolute top-2 right-2 text-[8px] font-bold px-1.5 py-0.5 rounded-sm uppercase ${
                            style.pro
                              ? "bg-purple-600 text-white"
                              : "bg-purple-500 text-white"
                          }`}
                        >
                          {style.badge}
                        </span>
                      )}

                      {/* Icon for No Style */}
                      {style.hasIcon && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="text-gray-500"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <line x1="4" y1="4" x2="20" y2="20" />
                            </svg>
                          </div>
                        </div>
                      )}

                      <span className="relative text-xs font-medium text-white z-10">
                        {style.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* DURATION */}
            <div>
              <label className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2 block">
                Duration
              </label>
              <div className="flex items-center gap-2">
                {[
                  { label: "3s", credits: 10 },
                  { label: "5s", credits: 20 },
                ].map((dur) => (
                  <button
                    key={dur.label}
                    onClick={() => setSelectedDuration(dur.label)}
                    className={`flex flex-col items-center justify-center px-5 py-3 rounded-lg border-2 transition-colors ${
                      selectedDuration === dur.label
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-white/10 bg-[#1a1a1a]"
                    }`}
                  >
                    <span className="text-lg font-semibold text-white">
                      {dur.label}
                    </span>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-yellow-400 text-xs">&#x1F7E1;</span>
                      <span className="text-xs text-gray-400">{dur.credits}</span>
                    </div>
                    <span className="text-[9px] font-bold text-purple-400 uppercase mt-1">
                      Standard
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* ASPECT RATIO */}
            <div>
              <label className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-3 block">
                Aspect Ratio
              </label>
              <div className="flex items-end gap-3">
                {videoAspectRatios.map((ratio) => (
                  <button
                    key={ratio.label}
                    onClick={() => setSelectedRatio(ratio.label)}
                    className={`flex flex-col items-center justify-center gap-1.5 px-4 py-3 rounded-lg border-2 transition-colors ${
                      selectedRatio === ratio.label
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-white/10 bg-[#1a1a1a]"
                    }`}
                  >
                    <div
                      className={`rounded-sm ${
                        selectedRatio === ratio.label
                          ? "bg-purple-500"
                          : "bg-gray-600"
                      }`}
                      style={{
                        width: `${ratio.w}px`,
                        height: `${ratio.h}px`,
                      }}
                    />
                    <span
                      className={`text-xs ${
                        selectedRatio === ratio.label
                          ? "text-purple-400"
                          : "text-gray-400"
                      }`}
                    >
                      {ratio.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* REFERENCE IMAGE */}
            <div>
              <label className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2 block">
                Reference Image{" "}
                <span className="normal-case text-gray-500 font-normal">
                  (optional)
                </span>
              </label>
              <div className="border-2 border-dashed border-white/10 rounded-lg p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-white/20 transition-colors">
                <Upload size={24} className="text-gray-500" />
                <p className="text-xs text-gray-400 text-center">
                  Drag & drop an image or click to browse
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 flex flex-col overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-serif italic text-white mb-1">
              Your Videos
            </h2>
            <p className="text-sm text-gray-400">
              Start generating to see results here
            </p>
          </div>

          {/* Empty State */}
          <div className="flex-1 border border-white/5 rounded-xl flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center">
                <LayoutGrid size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                No videos yet
              </h3>
              <p className="text-sm text-gray-400 text-center max-w-xs">
                Enter a prompt and click generate to start creating cinematic AI
                videos.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
